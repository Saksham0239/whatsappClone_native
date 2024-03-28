import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { AntDesign } from "@expo/vector-icons";

const SignInForm = () => {
  return (
    <>
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
        title="Sign In"
        onClick={() => console.log("button pressed")}
        disabled={false}
      />
    </>
  );
};

export default SignInForm;
