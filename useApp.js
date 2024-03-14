import { useCallback, useEffect, useReducer } from "react";
import { defaultStateReducer } from "./utils/CommonUtils";
import * as SplashScreen from "expo-splash-screen";
import * as Font from 'expo-font';

const initialState = {
    isAppLoaded: false,
};

const useApp = () => {
    const [state, dispatch] = useReducer(defaultStateReducer, initialState);

    const { isAppLoaded } = state;

    useEffect(() => {
        prepareFonts();
    }, []);


    const prepareFonts = async () => {
        try {
            await Font.loadAsync({
                "black": require('./assets/fonts/Roboto-Black.ttf'),
                "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
                "bold": require("./assets/fonts/Roboto-Bold.ttf"),
                "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
                "italic": require("./assets/fonts/Roboto-Italic.ttf"),
                "light": require("./assets/fonts/Roboto-Light.ttf"),
                "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
                "medium": require("./assets/fonts/Roboto-Medium.ttf"),
                "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
                "regular": require("./assets/fonts/Roboto-Regular.ttf"),
                "thin": require("./assets/fonts/Roboto-Thin.ttf"),
                "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            dispatch({ payload: { isAppLoaded: true } });
        }
    }

    const onLayoutChange = useCallback(async () => {
        if (isAppLoaded) {
            await SplashScreen.hideAsync(); //hide splash screen as soon as app is loaded
        }
    }, [isAppLoaded]);

    return {
        isAppLoaded,
        onLayoutChange,
    };
};

export default useApp;
