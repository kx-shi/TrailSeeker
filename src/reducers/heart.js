import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLiked: false,
};

export const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state) => {
      if (state.isLiked === true) {
        state.isLiked = false;
      } else if (state.isLiked === false) {
        state.isLiked = true;
      }
    },
  },
});
