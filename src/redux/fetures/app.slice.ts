// import { NavbarType } from "@/types/navbar.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavbarType } from "../../common/types/navbar.type";

// Define a type for the slice state
interface AppState {
    navbarType: NavbarType;
    showNavBar: boolean;
    deviceType: "desktop" | "mobile";
}

// Define the initial state using that type
const initialState: AppState = {
    deviceType:
        navigator.userAgent.toLowerCase().indexOf("mobile") !== -1
            ? "mobile"
            : "desktop",
    navbarType: "static",
    showNavBar: true,
};

export const appSlice = createSlice({
    name: "app",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        showNavbar(state) {
            state.showNavBar = true;
        },
        closeNavbar(state) {
            state.showNavBar = false;
        },
        toggleNavbar(state) {
            if (state.showNavBar) state.showNavBar = false;
            else state.showNavBar = true;
        },
        changeNavbarType(state, action: PayloadAction<NavbarType>) {
            state.navbarType = action.payload;
        },
    },
});

export const { showNavbar, closeNavbar, toggleNavbar, changeNavbarType } =
    appSlice.actions;

export default appSlice.reducer;
