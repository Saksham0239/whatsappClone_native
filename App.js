import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator/StackNavigator';
import useApp from "./useApp";


export default function App() {
  const {isAppLoaded,onLayoutChange}=useApp();

  if(!isAppLoaded){
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutChange}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label:{
    color:"black",
    fontSize:18,
    fontFamily:"regular",
  }
});
