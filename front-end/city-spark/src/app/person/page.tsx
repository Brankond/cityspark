import PersonCard from '@/components/PersonCard';
import React from 'react'
import { useSearchParams } from 'next/navigation';

interface Person {
    id: number;
    userId: string;
    name: string;
    contactNo: string;
    description: string;
    birthday: Date;
}

const PersonDetails = async () => {
  const res = await fetch('http://localhost:8080/cityspark/person/1');
  const person: Person = await res.json();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Person Detail</h2>
      {
        <PersonCard id={1} />
      }
    </div>
  )
}

export default PersonDetails