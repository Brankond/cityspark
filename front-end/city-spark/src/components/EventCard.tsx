import React from 'react';

interface Event {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  eventStartDT: Date;
  eventEndDT: Date;
}

const EventCard: React.FC<Event> = ({ id, title, type, location, description, eventStartDT, eventEndDT }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Start Time: {eventStartDT?.toLocaleString()}</p>
        <p>End Time: {eventEndDT?.toLocaleString()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
