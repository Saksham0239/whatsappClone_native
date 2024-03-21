export const defaultStateReducer = (state, action) => {
  const { payload } = action;

  const newState = { ...state, ...payload };

  return { ...newState };
};

export const NavigationPathConst = {
  Home:"Home",
  ChatListScreen:"ChatListScreen",
  ChatSettingsScreen:"ChatSettingsScreen",
  SettingsScreen:"SettingsScreen",
}
