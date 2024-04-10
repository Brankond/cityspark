"use client";

import EmailStep from "@/components/Signup/EmailStep";
import { User } from "@/types";
import { useState } from "react";

export default function SignupPage() {
  const userInit: User = { email: "", password: "" };

  const [user, setUser] = useState<User>(userInit);
  const [step, setStep] = useState<number>(1);

  const updateUserData = (data: Partial<User>) => {
    setUser({ ...user, ...data });
  };

  return step === 1 ? <EmailStep updateUserData={updateUserData} /> : <h1></h1>;
}
