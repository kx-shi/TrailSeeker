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

      let liked = state.likedList.find((el) => el.id === id);
      console.log(liked);
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
