export const defaultStateReducer = (state, action) => {
  const { payload } = action;

  const newState = { ...state, ...payload };

  return { ...newState };
};

export const NavigationPathConst = {
  Home: "Home",
  ChatListScreen: "ChatListScreen",
  ChatSettingsScreen: "ChatSettingsScreen",
  ChatScreen: "ChatScreen",
  SettingsScreen: "SettingsScreen",
};

export const Color = {
  blue: "#3498db",
  grey: "#bdc3c7",
};
