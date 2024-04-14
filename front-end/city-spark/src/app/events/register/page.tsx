"use client";
import React from 'react';
import RegisterEventForm from '@/components/RegisterEventForm';
import { useSearchParams } from 'next/navigation';

const RegisterEventPage: React.FC = () => {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('eventId');

    const parsedEventId = eventId ? parseInt(eventId as string, 10) : undefined;

    return (
        <div>
          <RegisterEventForm eventId={parsedEventId}/>
        </div>
    );
};

export default RegisterEventPage;