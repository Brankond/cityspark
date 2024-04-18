'use client';
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'
import axios from 'axios';

interface FormData {
  userId: string;
  name: string;
  contactNo: string;
  description: string;
  birthday: Date;
}

interface PersonId {
    id: number;
  }

const PersonCard: React.FC<PersonId> = ({ id }) => {
//   const router = useRouter();
  const handleUpdateButtonClick = () => {
    // Navigate to the update page and pass eventId and isUpdate
    // router.push(`/events/create?eventId=${id}&isUpdate=true`);
  };

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    name: '',
    contactNo: '',
    description: '',
    birthday: new Date(),
  });

  useEffect(() => {
    fetchPersonDetails(id);
  }, [id]);

  const fetchPersonDetails = async (id: number) => {
    try {
      const response = await axios.get(`http://52.221.238.193:8080/cityspark/person/${id}`);
      const personDetails = response.data;
      setFormData({
        userId: personDetails.userId,
        name: personDetails.name,
        contactNo: personDetails.contactNo,
        description: personDetails.description,
        birthday: personDetails.birthday,
      });
    } catch (error) {
      console.error('Error fetching personal details:', error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{formData.userId}</h2>
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Contact Number</span>
        </div>
        <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
          <span className="label-text">Birthday</span>
        </div>
        <input type="date-local" name="birthday" value={formData.birthday?.toLocaleString()} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-warning" onClick={handleUpdateButtonClick}>Save Profile</button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
