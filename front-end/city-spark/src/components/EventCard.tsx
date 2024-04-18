'use client';
import React from 'react';
import { useRouter } from 'next/navigation'

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
  const router = useRouter();
  const handleUpdateButtonClick = () => {
    // Navigate to the update page and pass eventId and isUpdate
    router.push(`/content/events/create?eventId=${id}&isUpdate=true`);
    
  };
  const handleDeleteButtonClick = async() => {
    const res = await fetch(`http://52.221.238.193:8080/cityspark/event/delete/${id}`)
    window.location.reload();

  };
  const handleRegisterButtonClick = () => {
    router.push(`/content/events/register?eventId=${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4" style={{ width: '800px' }}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Start Time: {eventStartDT?.toLocaleString()}</p>
        <p>End Time: {eventEndDT?.toLocaleString()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-warning" onClick={handleUpdateButtonClick}>Update</button>
          <button className="btn btn-outline btn-error" onClick={handleDeleteButtonClick}>Delete</button>
          <button className="btn btn-outline" onClick={handleRegisterButtonClick}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
