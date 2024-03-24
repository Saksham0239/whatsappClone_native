import { useCallback, useReducer } from "react";
import { defaultStateReducer } from "../../utils/CommonUtils";

const initialState = {
  messageText: "",
};

const useChatScreen = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { messageText } = state;

  const onChangeMessageText = (msg) => {
    dispatch({
      payload: { messageText: msg },
    });
    return msg;
  };

  const sendMessage = useCallback(() => {
    dispatch({
      payload: {
        messageText: "",
      },
    });
  }, [messageText]); //wont create a new function on every re-render

  return {
    messageText,
    onChangeMessageText,
    sendMessage,
  };
};

export default useChatScreen;
