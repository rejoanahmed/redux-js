import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface postSlate {
  id: string;
  title: string;
  content: string;
}
const initialState: postSlate[] = [
  { id: "1", title: "post1", content: "body1" },
  { id: "2", title: "post2", content: "body2" },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action: PayloadAction<postSlate>) => {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postSlice.reducer;
