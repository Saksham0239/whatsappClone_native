import { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";
import ErrorWrapper from "./ErrorWrapper";
import ErrorModal2 from "./ErrorModal2";
// import { NavigationPathConst as Nav } from "../utils/CommonUtils";
// import { useNavigation } from "@react-navigation/native";



const ErrorContainer = ({isFullPageError,payload,isModalError,reset})=>{

    // const {navigate}= useNavigation();
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(isModalError);
    },[isModalError]);

    const modalCallback = (close)=>{
        if(close==='close'){
            setIsVisible(false);
            reset();
        }
    }

    const renderError = ()=>{
        if(Object.keys(payload).length){
            if(isFullPageError){
                return <ErrorWrapper payload={payload}/>;
            }
            else if(isModalError){
                return <ErrorModal payload={payload} isVisible={isVisible} modalCallback={modalCallback}/>;
            }
            else {
                return <></>;
            }
        }
    }

    return (
        <>
            {renderError()}
        </>
    )

}

export default ErrorContainer;