import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
};

export const paymentSlice = createSlice({
  name: "userAddress",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.userInfo.push(action.payload);
    },
  },
});

export default paymentSlice.reducer;
export const { addInfo } = paymentSlice.actions;
