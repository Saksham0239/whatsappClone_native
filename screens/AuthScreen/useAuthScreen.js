import { useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const initialState = {
  isSignUp: false,
};

const useAuthScreen = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const { isSignUp } = state;

  const signUpScreenToggle = () => {
    dispatch({
      payload: {
        isSignUp: !isSignUp,
      },
    });
  };

  return {
    isSignUp,
    signUpScreenToggle,
  };
};

export default useAuthScreen;
