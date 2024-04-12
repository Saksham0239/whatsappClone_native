import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { AntDesign } from "@expo/vector-icons";
import {validate} from "validate.js";


const SignInForm = () => {

  const formChangeHandler=(id,value)=>{
    console.log(id,value);

    if(id === 'email'){
      constraints = {
        from: {
          email: {
            message: "doesn't look like a valid email"
          }
        }
      };
      console.log(validate({[id]:value},{[id]:constraints}));
    }
  }

  return (
    <>
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
        title="Sign In"
        onClick={() => console.log("button pressed")}
        disabled={false}
      />

    {/* <SubmitButton
        title="fullpageError"
        onClick={() => dispatchError({
          type:ErrorTypes?.FULL_PAGE_ERROR,
          title:"Error",
          subtitle:"this is a full page error",
        })}
        disabled={false}
      />

    <SubmitButton
        title="modalError"
        onClick={() => dispatchError({
          type:ErrorTypes?.MODAL_ERROR,
          title:"Modal Error",
          subtitle:"this is a modal error",
        })}
        disabled={false}
      /> */}
    </>
  );
};

export default SignInForm;
