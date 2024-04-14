/** Models */
export interface User {
  email: string;
  password: string;
}

/** Layouts */
export interface SignupLayoutProps {
  children: React.ReactNode;
}

/** Components */
export interface SignupFormProps {}

/** Contexts */
export interface SignupContextType {
  user: User;
  updateUserData: (data: Partial<User>) => void;
  isFormValid: boolean;
  updateFormValidity: (validity: boolean) => void;
}
