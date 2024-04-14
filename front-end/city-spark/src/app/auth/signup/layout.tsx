"use client";

import { SignupContextType, SignupLayoutProps, User } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { SignupContext } from "@/contexts/SignupContext";

const SignupLayout: React.FC<SignupLayoutProps> = ({ children }) => {
  const userInit: User = { email: "", password: "" };

  const [user, setUser] = useState<User>(userInit);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const updateUserData = (data: Partial<User>) => {
    setUser({ ...user, ...data });
  };

  const updateFormValidity = (validity: boolean) => {
    setIsFormValid(validity);
  };

  const contextValue: SignupContextType = {
    user,
    updateUserData,
    isFormValid,
    updateFormValidity,
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignupContext.Provider value={contextValue}>
        <Card className="min-w-[25rem]">
          <CardHeader className="flex gap-3 items-center">
            <Link href="/" className="flex items-center">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="h-5 text-neutral-500"
              />
            </Link>
            <p>Signup</p>
          </CardHeader>
          <Divider />
          <CardBody>{children}</CardBody>
          <Divider />
          <CardFooter className="flex justify-end">
            <Button color="primary" isDisabled={!isFormValid}>
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </SignupContext.Provider>
    </div>
  );
};

export default SignupLayout;
