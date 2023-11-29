import React from "react";
import SearchFriend from "../../searchs/SearchFriend";
import FriendChatItem, { FriendChatItemType } from "./FriendChatItem";
import Card from "../../cards/Cards";

type Props = {};

const friends: FriendChatItemType[] = [
    {
        id: "1",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "2",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "3",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "4",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
];

const FriendListChat: React.FC<Props> = ({}) => {
    return (
        <Card className="min-w-[350px] p-2 bg-white h-full">
            <SearchFriend></SearchFriend>
            <div className="my-5">
                <p className="text-sm font-semibold text-slate-500 my-2">
                    Bạn bè
                </p>
                {friends.map((friend) => {
                    return (
                        <FriendChatItem
                            key={friend.id}
                            {...friend}
                        ></FriendChatItem>
                    );
                })}
            </div>
        </Card>
    );
};

export default FriendListChat;
