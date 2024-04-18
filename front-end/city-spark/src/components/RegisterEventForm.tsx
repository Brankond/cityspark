"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import axios from "axios";
import { DOMAIN } from "@/constants/ConnectionConstants";

interface FormData {
  eventId: string;
  eventTitle: string;
  personName: string;
  personContactNo: string;
}

interface RegisterEventFormProps {
  eventId?: number; // Id of the event to update
}

const RegisterEventForm: React.FC<RegisterEventFormProps> = ({ eventId }) => {
  const [formData, setFormData] = useState<FormData>({
    eventId: "",
    eventTitle: "",
    personName: "",
    personContactNo: "",
  });
  useEffect(() => {
    if (eventId) {
      fetchEventTitle(eventId);
    }
  }, [eventId]);

  const fetchEventTitle = async (id: number | undefined) => {
    if (id === undefined) return;

    try {
      const response = await axios.get(
        `${DOMAIN}/cityspark/event/review/${id}`
      );
      const eventData = response.data;
      setFormData({
        eventId: eventData.id,
        eventTitle: eventData.title,
        personName: "",
        personContactNo: "",
      });
    } catch (error) {
      console.error("Error fetching event title:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const requestBody = {
        eventId: formData.eventId,
        personContactNo: formData.personContactNo,
      };
      let response;
      console.log(formData.personContactNo);
      response = await axios.post(
        `${DOMAIN}/cityspark/participation/registerAsAttendee`,
        requestBody
      );

      if (response.data) {
        alert(response.data.content);
      } else {
        console.error("Failed to register event");
      }
    } catch (error) {
      console.error("Error register event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4 text-center">{"Register Event"}</h2>
      <h6>{"Please fill up personal info to register the event"}</h6>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <Input
            isReadOnly
            type="text"
            label="Event Title"
            variant="bordered"
            value={formData.eventTitle}
            className="max-w-xs"
          />
        </div>
        <div className="label">
          <Input
            type="text"
            label="Person Name"
            name="personName"
            onChange={handleChange}
          />
        </div>
        <div className="label">
          <Input
            type="text"
            label="Person Contact No"
            name="personContactNo"
            onChange={handleChange}
          />
        </div>
      </label>
      <button type="submit" className="btn btn-outline">
        {"Register"}
      </button>
    </form>
  );
};

export default RegisterEventForm;
