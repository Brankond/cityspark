import {
  USER_EXISTS,
  VERIFY_EMAIL_SUCCESS,
} from "@/constants/AuthenticationConstants";
import { CREATE_API, DOMAIN, USER_API } from "@/constants/ConnectionConstants";
import { SignupResult, User } from "@/types";
import axios from "axios";

/** Sign up services */
export class SignupService {
  async signup(user: User): Promise<SignupResult> {
    const emailVerificationResult = await this.verifyEmail(user.email);

    if (emailVerificationResult === USER_EXISTS) {
      return USER_EXISTS;
    }

    const createUserResponse = await axios.post(
      DOMAIN + USER_API + CREATE_API,
      user
    );

    return createUserResponse.data as boolean;
  }

  async verifyEmail(email: string) {
    const response = await axios.get(DOMAIN + USER_API + `/${email}`);

    if (response.data !== "") {
      return USER_EXISTS;
    }

    return VERIFY_EMAIL_SUCCESS;
  }
}

/** Login Service */
export class LoginService {
  async login(user: User): Promise<boolean> {
    return true;
  }
}
