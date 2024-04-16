import { LoginContextType } from "@/types";
import { createContext } from "react";

const initialLoginContext: LoginContextType = {
  isFormValid: false,
  updateFormValidity: () => {},
};

export const LoginContext =
  createContext<LoginContextType>(initialLoginContext);
