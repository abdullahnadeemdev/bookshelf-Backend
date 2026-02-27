import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookMarkSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.items = state?.items?.filter((item) => item.id !== action.payload);
    },
    addEmailBookmark: (state, action) => {
      state.items = state.items?.map((item) => {
        if (item.email === "guest") {
          item.email = action.payload;
          return item;
        } else {
          return item;
        }
      });
    },
  },
});

export default bookMarkSlice.reducer;
export const { addBookmark, removeBookmark, addEmailBookmark } =
  bookMarkSlice.actions;
