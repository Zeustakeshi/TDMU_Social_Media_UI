import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SidebarChatItemType } from "../../common/types/chat.type";
import { CallState } from "../../common/enums/call.enum";

interface ChatState {
    currentChat: SidebarChatItemType | null;
    callState: CallState;
}

const initialState: ChatState = {
    currentChat: null,
    callState: CallState.NOT_IN_CALL,
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setCurrentChat(state, action: PayloadAction<SidebarChatItemType>) {
            state.currentChat = action.payload;
        },

        setCallState(state, action: PayloadAction<CallState>) {
            state.callState = action.payload;
        },
    },
});

export const { setCurrentChat, setCallState } = chatSlice.actions;

export default chatSlice.reducer;
