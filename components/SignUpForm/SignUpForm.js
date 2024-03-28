import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { AntDesign } from "@expo/vector-icons";

const SignUpForm = () => {
  return (
    <>
      <CustomInput
        label="First name"
        designFamily={AntDesign}
        iconName="user"
        iconSize={20}
      />
      <CustomInput
        label="Last name"
        designFamily={AntDesign}
        iconName="user"
        iconSize={20}
      />
      <CustomInput
        label="Email"
        designFamily={AntDesign}
        iconName="mail"
        iconSize={20}
      />
      <CustomInput
        label="Password"
        designFamily={AntDesign}
        iconName="lock"
        iconSize={20}
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
