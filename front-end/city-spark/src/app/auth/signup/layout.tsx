import { SignupLayoutProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import Link from "next/link";

const SignupLayout: React.FC<SignupLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className={`flex flex-col justify-between min-w-96 min-h-96 pb-4 pt-9 px-4 rounded-md border border-neutral-300 shadow-2xl ${styles["auth-form"]}`}
      >
        <div className="flex flex-row">
          <Link href="/">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="h-5 text-neutral-500"
            />
          </Link>
        </div>
        <div className="flex-1">{children}</div>
        <div className="border-b border-neutral-200"></div>
        <div className="flex flex-row justify-end">
          <button className="group transition-colors px-4 py-3 border-e-4 border-neutral-500 hover:bg-neutral-500 hover:border-lime-300">
            <h2 className="transition-colors font-bold text-neutral-500 group-hover:text-neutral-100">
              Next
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
