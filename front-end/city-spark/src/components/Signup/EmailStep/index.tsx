import { SignupStepProps } from "@/types";
import { Input } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";

const ERR_MSG = "Please enter a valid email address";

const validateEmail = (email: string) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

const EmailStep: React.FC<SignupStepProps> = ({ updateUserData }) => {
  const [email, setEmail] = useState<string>("");

  const isEmailValid = useMemo(() => {
    if (email === "") return true;

    return validateEmail(email) ? true : false;
  }, [email]);

  // Update user data when email is valid
  useEffect(() => {
    if (isEmailValid) {
      updateUserData({ email });
    }
  }, [isEmailValid, email]);

  return (
    <Input
      type="email"
      label="Email"
      value={email}
      onValueChange={setEmail}
      radius="sm"
      color={!isEmailValid ? "danger" : "default"}
      isInvalid={!isEmailValid}
      errorMessage={!isEmailValid && ERR_MSG}
    />
  );
};

export default EmailStep;
