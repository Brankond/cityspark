import FeedbackCard from '@/components/FeedbackCard';
import CreateFeedbackForm from '@/components/FeedbackForm';
import { DOMAIN } from '@/constants/ConnectionConstants';
import React from 'react'

interface Feedback {
  id: number;
  feedback: string;
}

const FeedbackList = async () => {
  const res = await fetch(`${DOMAIN}}/cityspark/feedback/reviewall?${Date.now()}`);
  const datas: Feedback[] = await res.json();
  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Feedback List</h2>
        </div>
        {datas.map(data => (
          <FeedbackCard key={data.id} {...data} />
        ))}
        <CreateFeedbackForm />
      </div>
    </div>
  )
}

export default FeedbackList