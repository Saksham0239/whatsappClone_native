export const defaultStateReducer = (state, action) => {
  const { payload } = action;

  const newState = { ...state, ...payload };

  return { ...newState };
};
