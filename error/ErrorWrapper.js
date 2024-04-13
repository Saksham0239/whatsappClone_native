import { StyleSheet, View, Text, Button } from "react-native";
import { Color } from "../utils/CommonUtils";

const ErrorWrapper = ({ payload }) => {
  return (
    <View style={errorWrapper.errorContainer}>
      <Text>{payload?.title}</Text>
      <Text>{payload?.subtitle}</Text>
      <Button title="close" onPress={() => "ErrorWrapper Pressed"} />
    </View>
  );
};

export default ErrorWrapper;

const errorWrapper = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: Color?.nearlyWhite,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
