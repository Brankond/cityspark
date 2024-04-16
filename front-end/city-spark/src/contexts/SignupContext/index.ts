import { SignupContextType } from "@/types";
import { createContext } from "react";

const initialSignupContext: SignupContextType = {
  user: {
    email: "",
    password: "",
  },
  updateUserData: () => {},
  isFormValid: false,
  updateFormValidity: () => {},
};

export const SignupContext =
  createContext<SignupContextType>(initialSignupContext);
