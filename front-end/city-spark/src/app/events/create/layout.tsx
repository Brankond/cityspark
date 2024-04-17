import { LayoutProps } from "@/types";
import { Suspense } from "react";

const CreateEventLayout: React.FC<LayoutProps> = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default CreateEventLayout;
