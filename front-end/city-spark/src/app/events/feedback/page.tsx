import FeedbackCard from '@/components/FeedbackCard';
import CreateFeedbackForm from '@/components/FeedbackForm';
import React from 'react'

interface Feedback {
  id: number;
  feedback: string;
}

const FeedbackList = async () => {
  const res = await fetch(`http://localhost:8080/cityspark/feedback/reviewall?${Date.now()}`);
  const datas: Feedback[] = await res.json();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Feedback List</h2>
      {datas.map(data => (
        <FeedbackCard key={data.id} {...data} />
      ))}
      <CreateFeedbackForm />
    </div>
  )
}

export default FeedbackList