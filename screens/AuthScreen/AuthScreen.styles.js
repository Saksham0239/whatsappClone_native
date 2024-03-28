import { StyleSheet } from "react-native";
import { Color } from "../../utils/CommonUtils";

const authScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: Color.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    resizeMode: "contain",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default authScreenStyles;
