import { SignupContext } from "@/contexts/SignupContext";
import { SignupFormProps } from "@/types";
import { Input } from "@nextui-org/react";
import { useContext, useEffect, useMemo, useState } from "react";

const EMAIL_ERR_MSG = "Please enter a valid email address";
const PASSWORD_ERR_MSG = "Password must be at least 8 characters long";
const CONFIRM_PASSWORD_ERR_MSG = "Passwords do not match";

const validateEmail = (email: string) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

const SignupForm: React.FC = () => {
  const { updateUserData, updateFormValidity } = useContext(SignupContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Validate email, password and confirm password
  const isEmailValid = useMemo(() => {
    return validateEmail(email) ? true : false;
  }, [email]);

  const isPasswordValid = useMemo(() => {
    return password.length >= 8 ? true : false;
  }, [password]);

  const isConfirmPasswordValid = useMemo(() => {
    return confirmPassword === password ? true : false;
  }, [confirmPassword, password]);

  const isFormValid = useMemo(() => {
    return isEmailValid && isPasswordValid && isConfirmPasswordValid;
  }, [isEmailValid, isPasswordValid, isConfirmPasswordValid]);

  // Control display of error message
  const displayEmailError = useMemo(() => {
    return email === "" ? false : !isEmailValid;
  }, [email, isEmailValid]);

  const displayPasswordError = useMemo(() => {
    return password === "" ? false : !isPasswordValid;
  }, [password, isPasswordValid]);

  const displayConfirmPasswordError = useMemo(() => {
    return confirmPassword === "" ? false : !isConfirmPasswordValid;
  }, [confirmPassword, isConfirmPasswordValid]);

  // Update user data
  useEffect(() => {
    if (isEmailValid) {
      updateUserData({ email });
    }
  }, [isEmailValid, email]);

  useEffect(() => {
    if (isPasswordValid) {
      updateUserData({ password });
    }
  }, [isPasswordValid, password]);

  // Update form validity
  useEffect(() => {
    updateFormValidity(isFormValid);
  }, [isFormValid]);

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        type="email"
        label="Email"
        value={email}
        onValueChange={setEmail}
        radius="sm"
        isRequired={true}
        color={displayEmailError ? "danger" : "default"}
        errorMessage={displayEmailError && EMAIL_ERR_MSG}
      />
      <Input
        type="password"
        label="Password"
        radius="sm"
        isRequired={true}
        value={password}
        onValueChange={setPassword}
        color={displayPasswordError ? "danger" : "default"}
        errorMessage={displayPasswordError && PASSWORD_ERR_MSG}
      />
      <Input
        type="password"
        label="Confirm Password"
        radius="sm"
        isRequired={true}
        value={confirmPassword}
        onValueChange={setConfirmPassword}
        color={displayConfirmPasswordError ? "danger" : "default"}
        errorMessage={displayConfirmPasswordError && CONFIRM_PASSWORD_ERR_MSG}
      />
    </div>
  );
};

export default SignupForm;
