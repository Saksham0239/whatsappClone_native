import { pageStyles } from "./PageContainer.styles";
import { View } from "react-native";

const PageContainer = ({ style, children }) => {
  return <View style={{ ...pageStyles.container, ...style }}>{children}</View>;
};

export default PageContainer;
