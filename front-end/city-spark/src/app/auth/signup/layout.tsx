"use client";

import {
  SignupContextType,
  SignupLayoutProps,
  SignupResult,
  User,
} from "@/types";
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
import { useState, useMemo, useEffect } from "react";
import { SignupContext } from "@/contexts/SignupContext";
import { SignupService } from "@/services/AuthenticationService";
import AlertCard from "@/components/Common/AlertCard";
import { USER_EXISTS } from "@/constants/AuthenticationConstants";
import { useRouter } from "next/navigation";

/** Constants */
const USER_EXISTS_ERR_MSG = "User with this email already exists";

const loginButton = (
  <Button color="default">
    <Link href={"/auth/login"}>Login</Link>
  </Button>
);

/** Handlers */
const onSignup = async (
  service: SignupService,
  user: User,
  updateSignupResult: (result: SignupResult) => void
) => {
  try {
    const signupResult = await service.signup(user);
    updateSignupResult(signupResult);
  } catch (error) {
    console.error(error);
  }
};

const SignupLayout: React.FC<SignupLayoutProps> = ({ children }) => {
  const signupService = new SignupService();
  const router = useRouter();

  const userInit: User = { email: "", password: "" };

  const [user, setUser] = useState<User>(userInit);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [signupResult, setSignupResult] = useState<SignupResult>(null);

  const updateUserData = (data: Partial<User>) => {
    setUser({ ...user, ...data });
  };

  const updateFormValidity = (validity: boolean) => {
    setIsFormValid(validity);
  };

  const updateSignupResult = (result: SignupResult) => {
    setSignupResult(result);
  };

  const isUserExists = useMemo(
    () => signupResult === USER_EXISTS,
    [signupResult]
  );

  /** Redirect upon sucess signup */
  useEffect(() => {
    console.log(signupResult, typeof signupResult);

    if (signupResult === true) {
      router.push("/events");
    }
  }, [signupResult]);

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
          <CardBody className="flex flex-col gap-3">
            {children} {/* Signup failure popup */}
            <AlertCard
              alertMessage={USER_EXISTS_ERR_MSG}
              endContent={loginButton}
              className={`${!isUserExists && "hidden"}`}
            />
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-end">
            <Button
              color="primary"
              isDisabled={!isFormValid}
              onClick={() => {
                onSignup(signupService, user, updateSignupResult);
              }}
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </SignupContext.Provider>
    </div>
  );
};

export default SignupLayout;
