import React from 'react';

interface Event {
  id: number;
  title: string;
  type: string;
  status: string;
}

const EventCard: React.FC<Event> = ({ id, title, type, status }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Type: {type}</p>
        <p>Status: {status}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
