import EventCard from '@/components/EventCard';
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
  const res = await fetch(`http://localhost:8080/cityspark/event/reviewall?${Date.now()}`);
  const events: Event[] = await res.json();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Event List</h2>
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}

export default EventList