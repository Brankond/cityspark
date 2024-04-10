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
export interface SignupStepProps {
  updateUserData: (data: Partial<User>) => void;
}
