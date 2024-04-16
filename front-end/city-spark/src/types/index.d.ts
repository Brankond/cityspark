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

/** Contexts */
export interface SignupContextType {
  user: User;
  updateUserData: (data: Partial<User>) => void;
  isFormValid: boolean;
  updateFormValidity: (validity: boolean) => void;
}

export interface LoginContextType {
  isFormValid: boolean;
  updateFormValidity: (validity: boolean) => void;
}
