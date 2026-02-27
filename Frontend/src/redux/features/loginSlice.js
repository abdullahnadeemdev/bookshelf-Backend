import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userList: [],
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userList.push(action.payload);
    },
    login: (state, action) => {
      const { email, pw } = action.payload;
      const userData = state.userList?.find((item) => item?.email === email);

      if (!userData) {
        console.log("show toast user not found");
      }

      if (userData && !userData.pw === pw) {
        console.log("show toast invalid creds");
      }

      if (userData) {
        state.user = userData;
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
    },
    changePw: (state, action) => {
      const { pet, userPw } = action.payload;

      const userChange = state?.userList.find(
        (item) => item.petName?.toLowerCase() === pet
      );

      if (userChange) {
        userChange.pw = userPw;
      }
    },
  },
});

export default loginSlice.reducer;
export const { login, signUp, logout, changePw } = loginSlice.actions;
