import { createSlice } from "@reduxjs/toolkit";

let likedList = [{ id: 8982351, isLiked: true }];

const initialState = {
  likedList,
};

export const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, action) => {
      const { id, isLiked } = action.payload;
      // use local state in heart component?
      //   if (state.isLiked === true) {
      //     state.isLiked = false;
      //   } else if (state.isLiked === false) {
      //     state.isLiked = true;
      //   }
    },
  },
});
