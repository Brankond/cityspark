'use client';
import React, { useState } from 'react';
import axios from 'axios';

const CreateEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    description: '',
    eventStartDT: '',
    eventEndDT: '',
    status:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await axios.post('http://localhost:8080/cityspark/event/create', formDataWithStatus);
      if (response.data) {
        console.log('Event created successfully!');
        // Reset form fields after successful submission
        setFormData({
          title: '',
          type: '',
          location: '',
          description: '',
          eventStartDT: '',
          eventEndDT: '',
          status:'',
        });
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
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Type</span>
        </div>
        <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Location</span>
        </div>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Start Time</span>
        </div>
        <input type="datetime-local" name="eventStartDT" value={formData.eventStartDT} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">End Time</span>
        </div>
        <input type="datetime-local" name="eventEndDT" value={formData.eventEndDT} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <button type="submit" className='btn btn-outline'>Create Event</button>
    </form>
    
  );
};

export default CreateEventForm;

