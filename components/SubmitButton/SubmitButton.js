import { TouchableOpacity, Text } from "react-native";
import { Color } from "../../utils/CommonUtils";
import submitButtonStyles from "./SubmitButton.styles";

const SubmitButton = (props) => {
  const { title, color, disabled, onClick } = props;

  const enabledBgColor = color || Color.primary;
  const disabledBgColor = Color.lightGrey;

  const bgColor = disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onClick}
      style={{ ...submitButtonStyles.button, ...{ backgroundColor: bgColor } }}
    >
      <Text style={{ color: disabled ? Color?.darkGrey : "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
