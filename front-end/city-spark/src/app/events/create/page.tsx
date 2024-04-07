import React from 'react';
import CreateEventForm from '@/components/CreateEventForm';

const CreateEventPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Event</h2>
      <CreateEventForm />
    </div>
  );
};

export default CreateEventPage;
