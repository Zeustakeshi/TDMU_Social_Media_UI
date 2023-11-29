import React from "react";
import Card from "../../cards/Cards";
import SearchChat from "../../searchs/SearchChat";
import { AiOutlineStar } from "react-icons/ai";
import SidebarChatItem from "./SidebarChatItem";
import { SidebarChatItemType } from "../../../common/types/chat.type";

type Props = {};

const chats: SidebarChatItemType[] = [
    {
        id: "1",
        atavar: "/avatar.png",
        status: "offline",
        username: "Minh Hieu",
        lastMessage:
            "Hello world Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world",
        updateAt: new Date(),
    },
    {
        id: "2",
        atavar: "/avatar.png",
        status: "online",
        username: "Nguyen A",
        lastMessage: "Hello world",
        updateAt: new Date(),
    },
    {
        id: "3",
        atavar: "/avatar.png",
        status: "online",
        username: "Le van C",
        lastMessage: "Hello world",
        updateAt: new Date(),
    },
];

const SidebarChat: React.FC<Props> = ({}) => {
    return (
        <Card className="h-full w-[400px] bg-white">
            <div className="flex justify-between items-center gap-2">
                <SearchChat></SearchChat>
                <button className="w-[52px] h-[52px] flex justify-center items-center bg-primary bg-opacity-10 text-primary rounded-lg">
                    <AiOutlineStar></AiOutlineStar>
                </button>
            </div>
            <div className="my-5">
                {chats.map((chat) => {
                    return (
                        <SidebarChatItem
                            key={chat.id}
                            {...chat}
                        ></SidebarChatItem>
                    );
                })}
            </div>
        </Card>
    );
};

export default SidebarChat;
