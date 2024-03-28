import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../../components/PageContainer/PageContainer";
import authScreenStyles from "./AuthScreen.styles";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import useAuthScreen from "./useAuthScreen";
import SignInForm from "../../components/SignInForm/SignInForm";
import { TouchableOpacity, Text, View, Image, Platform } from "react-native";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import logo from "../../assets/images/logo.png";

const AuthScreen = () => {
  const { isSignUp, signUpScreenToggle } = useAuthScreen();
  return (
    <SafeAreaView style={authScreenStyles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          style={authScreenStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "height" : undefined}
          keyboardVerticalOffset={100}
        >
          <View style={authScreenStyles.imageContainer}>
            <Image style={authScreenStyles.image} source={logo} />
          </View>
          <PageContainer>
            {isSignUp ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity
              style={authScreenStyles?.linkContainer}
              onPress={() => signUpScreenToggle(isSignUp)}
            >
              <Text
                style={authScreenStyles?.link}
              >{`Go to ${isSignUp ? "Sign In Page" : "Sign Up Page"}`}</Text>
            </TouchableOpacity>
          </PageContainer>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
