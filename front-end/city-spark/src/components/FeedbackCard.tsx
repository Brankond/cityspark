'use client';
import React from 'react';
import {Card, CardBody} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

interface Feedback {
  id: number;
  feedback: string;
}

const FeedbackCard: React.FC<Feedback> = ({ id, feedback }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4" style={{ width: '800px' }}>
      <div className="card-body">
        <h2 className="card-title">user_name</h2>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
