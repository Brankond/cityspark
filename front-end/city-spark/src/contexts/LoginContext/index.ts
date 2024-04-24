import { LoginContextType } from "@/types";
import { createContext } from "react";

const initialLoginContext: LoginContextType = {
  credentials: {
    email: "",
    password: "",
  },
  updateCredentials: () => {},
  isFormValid: false,
  updateFormValidity: () => {},
};

export const LoginContext =
  createContext<LoginContextType>(initialLoginContext);
