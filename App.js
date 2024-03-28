import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator/StackNavigator";
import * as SplashScreen from "expo-splash-screen";
import useApp from "./useApp";
import AuthScreen from "./screens/AuthScreen/AuthScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isAppLoaded, isAuthenticated, onLayoutChange } = useApp();

  if (!isAppLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutChange}>
      <NavigationContainer>
        {isAuthenticated ? <StackNavigator /> : <AuthScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "regular",
  },
});
