"use client";
import React from 'react';
import RegisterEventForm from '@/components/RegisterEventForm';
import { useSearchParams } from 'next/navigation';

const RegisterEventPage: React.FC = () => {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('eventId');

    const parsedEventId = eventId ? parseInt(eventId as string, 10) : undefined;

    return (
      <div className="flex justify-center items-center h-screen ">
        <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-xl mb-4">
          <div className="flex justify-center">
          <RegisterEventForm eventId={parsedEventId}/>
          </div>
        </div>
      </div>
    );
};

export default RegisterEventPage;