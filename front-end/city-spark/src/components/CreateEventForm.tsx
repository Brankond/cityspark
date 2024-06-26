'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import {Input} from "@nextui-org/react";
import { DOMAIN } from '@/constants/ConnectionConstants';

interface FormData {
  title: string;
  type: string;
  location: string;
  description: string;
  eventStartDT: Date;
  eventEndDT: Date;
  status: string;
}

interface CreateEventFormProps {
  eventId?: number; // Id of the event to update
  isUpdate?: boolean; // Flag indicating if it's an update operation
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ eventId, isUpdate }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    type: '',
    location: '',
    description: '',
    eventStartDT: new Date(),
    eventEndDT: new Date(),
    status: '',
  });
  useEffect(() => {
    if (isUpdate && eventId) {
      // Fetch event data from the backend to populate the form
      fetchEventData(eventId);
    }
  }, [eventId, isUpdate]);

  const fetchEventData = async (id: number) => {
    try {
      const response = await fetch(`${DOMAIN}/cityspark/event/review/${id}`);
      const eventData = await response.json()
      setFormData({
        title: eventData.title,
        type: eventData.type,
        location: eventData.location,
        description: eventData.description,
        eventStartDT: eventData.eventStartDT,
        eventEndDT: eventData.eventEndDT,
        status: eventData.status,
      });
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataWithStatus = {
        ...formData,
        status: 'active',
      };
      let response;
      if (isUpdate && eventId) {
        // Update existing event
        response = await axios.post(`${DOMAIN}/cityspark/event/update/${eventId}`, formDataWithStatus);
      } else {
        // Create new event
        response = await axios.post(`${DOMAIN}/cityspark/event/create`, formDataWithStatus);
      }
      if (response.data) {
        console.log(isUpdate ? 'Event updated successfully!' : 'Event created successfully!');
        // Reset form fields after successful submission
        setFormData({
          title: '',
          type: '',
          location: '',
          description: '',
          eventStartDT: new Date(),
          eventEndDT: new Date(),
          status:'',
        });
        router.push('/content/events');
      } else {
        console.error('Failed to create event.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="" className="input input-bordered w-96 max-w-xs" />
        <div className="label">
          <span className="label-text">Type</span>
        </div>
        <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="" className="textarea textarea-bordered textarea-xs w-full max-w-xs" rows={5}></textarea>
        <div className="label">
          <span className="label-text">Location</span>
        </div>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Start Time</span>
        </div>
        <input type="datetime-local" name="eventStartDT" value={formData.eventStartDT?.toLocaleString()} onChange={handleChange} placeholder="" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">End Time</span>
        </div>
        <input type="datetime-local" name="eventEndDT" value={formData.eventEndDT?.toLocaleString()} onChange={handleChange} placeholder="" className="input input-bordered w-full max-w-xs" />
      </label>
      <div className="card-actions justify-end mt-4">
        <button type="submit" className='btn btn-outline'>{isUpdate?'Update':'Create'}</button>
      </div>
    </form>

  );
};

export default CreateEventForm;

