import {
  validateString,
  validateEmail,
  validatePassword,
} from "../../utils/ValidationUtils";
import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { AntDesign } from "@expo/vector-icons";

const SignUpForm = () => {
  const formChangeHandler = (id, value) => {
    if (id === "firstName" || id === "lastName") {
      console.log(validateString(id, value));
    } else if (id === "email") {
      console.log(validateEmail(id, value));
    } else if (id === "password") {
      console.log(validatePassword(id, value));
    }
  };
  return (
    <>
      <CustomInput
        id="firstName"
        label="First name"
        designFamily={AntDesign}
        iconName="user"
        iconSize={20}
        formChangeHandler={formChangeHandler}
      />
      <CustomInput
        id="lastName"
        label="Last name"
        designFamily={AntDesign}
        iconName="user"
        iconSize={20}
        formChangeHandler={formChangeHandler}
      />
      <CustomInput
        id="email"
        label="Email"
        designFamily={AntDesign}
        iconName="mail"
        iconSize={20}
        formChangeHandler={formChangeHandler}
      />
      <CustomInput
        id="password"
        label="Password"
        designFamily={AntDesign}
        iconName="lock"
        iconSize={20}
        formChangeHandler={formChangeHandler}
      />

      <SubmitButton
        title="Sign Up"
        onClick={() => console.log("button pressed")}
        disabled={false}
      />
    </>
  );
};

export default SignUpForm;
