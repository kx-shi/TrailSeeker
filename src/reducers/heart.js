import { createSlice } from "@reduxjs/toolkit";

let likedList = [{ id: "8982351", isLiked: true }];

const initialState = {
  likedList,
};

export const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      const { id } = action.payload;

      const liked = likedList.find((el) => el.id === id);
      if (liked === undefined) {
        state.likedList.push({
          id,
          isLiked: true,
        });
      } else {
        liked.isLiked = !liked.isLiked;
      }
    },
  },
});
