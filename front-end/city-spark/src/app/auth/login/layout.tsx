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
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { LoginContextType, LoginLayoutProps, LoginResult, User } from "@/types";
import { LoginContext } from "@/contexts/LoginContext";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AlertCard from "@/components/Common/AlertCard";
import { CREDENTIAL_ERROR } from "@/constants/ErrorMessages";
import { LoginService } from "@/services/AuthenticationService";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "@/constants/AuthenticationConstants";

/** Components */
const alertIcon = (
  <FontAwesomeIcon icon={faTriangleExclamation} className="text-rose-500" />
);

/** Handlers */
const onLogin = async (
  service: LoginService,
  credentials: User,
  updateLoginResult: (result: LoginResult) => void
) => {
  try {
    const loginResult = await service.login(credentials);
    updateLoginResult(LOGIN_SUCCESS);
  } catch (error) {
    updateLoginResult(LOGIN_FAILED);
  }
};

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  const router = useRouter();
  const loginService = new LoginService();

  const credentialsInit: User = { email: "", password: "" };

  const [credentials, setCredentials] = useState<User>(credentialsInit);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loginResult, setLoginResult] = useState<LoginResult>(null);

  const updateCredentials = (data: Partial<User>) => {
    setCredentials({ ...credentials, ...data });
  };

  const updateFormValidity = (validity: boolean) => {
    setIsFormValid(validity);
  };

  const updateLoginResult = (result: LoginResult) => {
    setLoginResult(result);
  };

  const isLoginFailed = useMemo(
    () => loginResult === LOGIN_FAILED,
    [loginResult]
  );

  console.log(isLoginFailed);

  /** Redirect upon sucess login */
  useEffect(() => {
    console.log(loginResult);

    if (loginResult === LOGIN_SUCCESS) {
      router.push("/content/events");
    }
  }, [loginResult]);

  const contextValue: LoginContextType = {
    credentials,
    updateCredentials,
    isFormValid,
    updateFormValidity,
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoginContext.Provider value={contextValue}>
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
          <CardBody className="flex flex-col gap-3">
            {children}
            <AlertCard
              alertMessage={CREDENTIAL_ERROR}
              startContent={alertIcon}
              className={`${!isLoginFailed && "hidden"}`}
            />
          </CardBody>
          <CardFooter>
            <Button
              className="w-full"
              color="primary"
              isDisabled={!isFormValid}
              onClick={() =>
                onLogin(loginService, credentials, updateLoginResult)
              }
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
