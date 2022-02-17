import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;