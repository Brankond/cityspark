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
    <Card>
    <CardBody>
      <p>{feedback}</p>
    </CardBody>
  </Card>
  );
};

export default FeedbackCard;
