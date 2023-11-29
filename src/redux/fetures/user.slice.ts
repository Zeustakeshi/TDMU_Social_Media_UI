// import { NavbarType } from "@/types/navbar.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../common/types/user.type";

// Define a type for the slice state
interface UserState {
    info: UserType | null;
}

// Define the initial state using that type
const initialState: UserState = {
    info: {
        id: "",
        avatar: "",
        email: "",
        gender: "female",
        username: "",
        backgroundURL: "",
        birthday: new Date(),
        description: "",
    },
};

export const userSlice = createSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setInfo(state, { payload }: PayloadAction<UserType>) {
            state.info = payload;
        },
        saveUserToStorage(_, { payload }: PayloadAction<UserType>) {
            localStorage.setItem("user", JSON.stringify(payload));
        },
        removeUserStorage() {
            localStorage.removeItem("user");
        },
    },
});

export const { saveUserToStorage, removeUserStorage, setInfo } =
    userSlice.actions;

export default userSlice.reducer;
