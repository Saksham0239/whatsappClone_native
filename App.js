import { StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import useApp from "./useApp";

export default function App() {
  const {isAppLoaded,onLayoutChange}=useApp();

  if(!isAppLoaded){
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutChange}>
      <SafeAreaView>
        <Text style={styles.label}>Hello Chat App</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label:{
    color:"black",
    fontSize:18,
    fontFamily:"regular",
  }
});
