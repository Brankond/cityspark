"use client";
import React from 'react';
import CreateEventForm from '@/components/CreateEventForm';
import { useSearchParams } from 'next/navigation';

const CreateEventPage: React.FC = () => {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('eventId');
  const isUpdate = searchParams.get('isUpdate');
  // Parse eventId as an integer
  const parsedEventId = eventId ? parseInt(eventId as string, 10) : undefined;

  // Parse isUpdate as a boolean
  const parsedIsUpdate = isUpdate === 'true';
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{isUpdate?'Update Event':'Create Event'}</h2>
      <CreateEventForm eventId={parsedEventId} isUpdate={parsedIsUpdate}/>
    </div>
  );
};

export default CreateEventPage;
