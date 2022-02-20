import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface postSlate {
  id: string;
  title: string;
  content: string;
  image: string | undefined;
  user: string;
}
const initialState: postSlate[] = [
  { id: "1", title: "post1", content: "body1", image: "image1", user: "user1" },
  { id: "2", title: "post2", content: "body2", image: "image", user: "user2" },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<postSlate>) {
        state.push(action.payload);
      },

      prepare(
        title: string,
        content: string,
        image: string | undefined,
        userId: string
      ) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            image,
            user: userId,
          },
        };
      },
    },

    postRemoved: (state, action: PayloadAction<postSlate>) => {
      state.splice(
        state.findIndex((post) => post.id === action.payload.id),
        1
      );
    },
    postUpdated: (state, action: PayloadAction<postSlate>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { postAdded, postRemoved, postUpdated } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postSlice.reducer;
