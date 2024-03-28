import { StyleSheet } from "react-native";
import { Color } from "../../utils/CommonUtils";

const submitButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
});

export default submitButtonStyles;
