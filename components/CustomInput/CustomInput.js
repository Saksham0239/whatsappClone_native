import { customInputStyles } from "./CustomInput.styles";
import { View, Text, TextInput } from "react-native";

const CustomInput = (props) => {
  const { label, iconName, iconSize, errorText } = props;
  return (
    <View style={customInputStyles.container}>
      <Text style={customInputStyles.label}>{label}</Text>
      <View style={customInputStyles.inputContainer}>
        {iconName && (
          <props.designFamily
            name={iconName}
            size={iconSize || 15}
            color="black"
            style={customInputStyles.icon}
          />
        )}
        <TextInput style={customInputStyles?.input} />
      </View>
      {errorText && (
        <View style={customInputStyles?.errorContainer}>
          <Text style={customInputStyles?.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
