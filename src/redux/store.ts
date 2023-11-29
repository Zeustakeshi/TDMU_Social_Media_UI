import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./fetures/app.slice";
import userSlice from "./fetures/user.slice";
import chatSlice from "./fetures/chat.slice";
// ...

export const store = configureStore({
    reducer: {
        app: appSlice,
        user: userSlice,
        chat: chatSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
