import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hello world sumet redux-toolkit",
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState: initialState,
  reducers: {
    // login is func we can have many func in reducers
    login: (state, action) => {
      state.value = "Login na kub";
      // action.payload is a user in component Come2

      state.user = action.payload;
      state.loading = true;
    },
    logout: state => {
      state.value = "Logout na kub";
      state.loading = false;
      state.user = []
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
