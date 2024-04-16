'use client';
import React, { useState } from 'react';
import axios from 'axios';
import {Textarea} from "@nextui-org/react";

const CreateFeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    feedback:'',
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
      };
      const response = await axios.post('http://localhost:8080/cityspark/feedback/create', formDataWithStatus);
      if (response.data) {
        console.log('Event created successfully!');
        // Reset form fields after successful submission
        setFormData({
          feedback:'',
        });
        window.location.reload();
      } else {
        console.error('Failed to create event.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        label="Feedback"
        name="feedback"
        placeholder="Enter your feedback"
        className="max-w-xs"
        value={formData.feedback} 
        onChange={handleChange}
      />
      <button type="submit" className='btn btn-outline mt-4'>Submit</button>
    </form>

  );
};

export default CreateFeedbackForm;