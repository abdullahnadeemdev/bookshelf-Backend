import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userList: [],
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload?.res;
      const data = {
        email: email,
        password: password,
      };
      // const userData = state.userList?.find((item) => item?.email === email);

      // if (!userData) {
      //   console.log("show toast user not found");
      // }

      // if (userData && !userData.pw === pw) {
      //   console.log("show toast invalid creds");
      // }

      if (data.email && data.password) {
        state.user = data;
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
        (item) => item.petName?.toLowerCase() === pet,
      );

      if (userChange) {
        userChange.pw = userPw;
      }
    },
  },
});

export default loginSlice.reducer;
export const { login, signUp, logout, changePw } = loginSlice.actions;
