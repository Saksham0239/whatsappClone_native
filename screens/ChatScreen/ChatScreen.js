import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BgImage from "../../assets/images/droplet.jpeg";
import { Feather } from "@expo/vector-icons";
import { Color } from "../../utils/CommonUtils";
import useChatScreen from "./useChatScreen";

const ChatScreen = () => {
  const { messageText, onChangeMessageText, sendMessage } = useChatScreen();
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={BgImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log("pressed")}
          >
            <Feather name="plus" size={24} color={Color?.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={onChangeMessageText}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("pressed")}
            >
              <Feather name="camera" size={24} color={Color?.blue} />
            </TouchableOpacity>
          )}

          {messageText !== "" && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather name="send" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color?.grey,
    paddingHorizontal: 12,
    marginHorizontal: 15,
  },
  mediaButton: {
    justifyContent: "center",
    alignContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: Color?.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
});

export default ChatScreen;
