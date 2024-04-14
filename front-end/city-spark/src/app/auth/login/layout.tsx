"use client";

import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { LoginContextType, LoginLayoutProps } from "@/types";
import { LoginContext } from "@/contexts/LoginContext";
import { useState } from "react";

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const updateFormValidity = (validity: boolean) => {
    setIsFormValid(validity);
  };

  const contextValue: LoginContextType = {
    isFormValid,
    updateFormValidity,
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoginContext.Provider value={contextValue}>
        {" "}
        <Card className="min-w-[25rem]">
          <CardHeader className="flex gap-3 items-center">
            <Link href="/" className="flex items-center">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="h-5 text-neutral-500"
              />
            </Link>
            <p>Login</p>
          </CardHeader>
          <Divider />
          <CardBody>{children}</CardBody>
          <CardFooter>
            <Button
              className="w-full"
              color="primary"
              isDisabled={!isFormValid}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </LoginContext.Provider>
    </div>
  );
};

export default LoginLayout;
