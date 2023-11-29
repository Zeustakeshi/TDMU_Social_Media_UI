import React from "react";
import Card from "../../cards/Cards";
import MainChatHeader from "./MainChatHeader";
import ChatInput from "./input/ChatInput";
import Message from "./message/Message";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import messages from "./chat.data";

type Props = {};

const MainChat: React.FC<Props> = ({}) => {
    const { currentChat } = useSelector((state: RootState) => state.chat);

    // Show welcome screen
    if (!currentChat) {
        return (
            <Card
                className="w-full h-full flex flex-col max-h-full"
                wrapperClassName="flex-1 py-5 flex  justify-center items-center"
                resetFooterStyle
                resetHeaderStyle
                footerLine={false}
            >
                <h2 className="text-xl">
                    Chào mừng đến với{" "}
                    <b className="font-semibold text-2xl text-primary">
                        TooMeet!
                    </b>
                </h2>
            </Card>
        );
    }
    // show chat screen
    return (
        <Card
            header={
                <MainChatHeader
                    id={currentChat.id}
                    status={currentChat.status}
                    username={currentChat.username}
                    avatar={currentChat.atavar}
                />
            }
            footer={<ChatInput />}
            className="w-full h-full flex flex-col max-h-full"
            wrapperClassName="flex-1  overflow-y-scroll hidden-scroll py-5"
            resetFooterStyle
            resetHeaderStyle
            footerLine={false}
        >
            {messages.map((message) => {
                return <Message key={message.id} {...message}></Message>;
            })}
        </Card>
    );
};

export default MainChat;
