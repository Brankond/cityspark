import EventCard from '@/components/EventCard';
import { DOMAIN } from '@/constants/ConnectionConstants';
import React from 'react'

interface Event {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  eventStartDT: Date;
  eventEndDT: Date;
}

const EventList = async () => {
  const res = await fetch(`${DOMAIN}/cityspark/event/reviewall?${Date.now()}`);
  const events: Event[] = await res.json();
  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Event List</h2>
        </div>
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  )
}

export default EventList