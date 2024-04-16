import { Card, CardBody, Input } from "@nextui-org/react";
import { useState, useMemo, useContext, useEffect } from "react";
import { validateEmail } from "@/utils/validations/validateEmail";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginContext } from "@/contexts/LoginContext";

const EMAIL_ERR_MSG = "This doesn't look like a valid email address";
const PASSWORD_ERR_MSG = "Password should be at least 8 characters long";
const CREDENTIAL_ERR_MSG = "The email and password don't seem right";

const LoginForm: React.FC = () => {
  const { updateFormValidity } = useContext(LoginContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Validate email, password and confirm password
  const isEmailValid = useMemo(() => {
    return validateEmail(email) ? true : false;
  }, [email]);

  const isPasswordValid = useMemo(() => {
    return password.length >= 8 ? true : false;
  }, [password]);

  const isFormValid = useMemo(() => {
    return isEmailValid && isPasswordValid;
  }, [isEmailValid, isPasswordValid]);

  // Control display of error message
  const displayEmailError = useMemo(() => {
    return email === "" ? false : !isEmailValid;
  }, [email, isEmailValid]);

  const displayPasswordError = useMemo(() => {
    return password === "" ? false : !isPasswordValid;
  }, [password, isPasswordValid]);

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
        color={displayEmailError ? "danger" : "default"}
        errorMessage={displayEmailError && EMAIL_ERR_MSG}
      />
      <Input
        type="password"
        label="Password"
        radius="sm"
        value={password}
        onValueChange={setPassword}
        color={displayPasswordError ? "danger" : "default"}
        errorMessage={displayPasswordError && PASSWORD_ERR_MSG}
      />

      {/* Authentication failure popup */}
      <Card className="bg-rose-100 border-rose-500 border hidden">
        <CardBody className="flex flex-row gap-3 items-center">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-rose-500"
          />
          <p className="text-rose-700">{CREDENTIAL_ERR_MSG}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
