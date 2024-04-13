import { createContext, useState } from "react";
import { ErrorTypes } from "../constants/CommonConstants";
import ErrorContainer from "./ErrorContainer";

export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [isFullPageError, setFullPageError] = useState(false);
  const [isModalError, setModalError] = useState(false);
  const [payload, setPayload] = useState({});

  const dispatchError = (object) => {
    if (object.type === ErrorTypes?.FULL_PAGE_ERROR) {
      setFullPageError(true);
      setModalError(false);
    }
    if (object.type === ErrorTypes?.MODAL_ERROR) {
      setFullPageError(false);
      setModalError(true);
    }
    if (object.type === ErrorTypes?.INLINE_ERROR) {
      setModalError(false);
      setFullPageError(false);
    }
    if (object) {
      setPayload(object);
    }
  };

  const reset = () => {
    setFullPageError(false);
    setModalError(false);
    setPayload({});
  };

  return (
    <ErrorContext.Provider value={{ dispatchError }}>
      <ErrorContainer
        isFullPageError={isFullPageError}
        isModalError={isModalError}
        payload={payload}
        reset={reset}
      />
      {!isFullPageError && children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
