import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../TabNavigator/TabNavigator";
import { NavigationPathConst as Nav } from "../../utils/CommonUtils";
import ChatSettingsScreen from "../../screens/ChatSettingsScreen/ChatSettingsScreen";
import ChatScreen from "../../screens/ChatScreen/ChatScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Nav?.Home}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Nav?.ChatSettingsScreen}
        component={ChatSettingsScreen}
        options={{
          headerTitle: "Settings",
          headerBackTitle: "Go Back",
        }}
      />
      <Stack.Screen
        name={Nav?.ChatScreen}
        component={ChatScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Go Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
