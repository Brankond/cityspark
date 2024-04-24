import { CardProps } from "@nextui-org/react";
import React from "react";

/** Models */
export interface User {
  email: string;
  password: string;
}

/** Layouts */
export interface LayoutProps {
  children: React.ReactNode;
}

export interface SignupLayoutProps extends LayoutProps {}

export interface LoginLayoutProps extends LayoutProps {}

/** Components */
export interface SignupFormProps {}

export interface AlertCardProps extends CardProps {
  startContent?: React.ReactNode;
  alertMessage?: string;
  endContent?: React.ReactNode;
}

/** Contexts */
export interface SignupContextType {
  user: User;
  updateUserData: (data: Partial<User>) => void;
  isFormValid: boolean;
  updateFormValidity: (validity: boolean) => void;
}

export interface LoginContextType {
  credentials: User;
  updateCredentials: (data: Partial<User>) => void;
  isFormValid: boolean;
  updateFormValidity: (validity: boolean) => void;
}

/** Services */
export type SignupResult = "USER_EXISTS" | boolean | null;
export type LoginResult = "User authenticated" | "Authentication failed" | null;
