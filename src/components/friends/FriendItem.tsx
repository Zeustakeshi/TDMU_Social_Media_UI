import moment from "moment";
import React from "react";
import Avatar from "../avatar/Avatar";

export type FriendItemType = {
    id: string;
    username: string;
    avatar: string;
    lastActive: string;
};

const FriendItem: React.FC<FriendItemType> = ({ username }) => {
    return (
        <div className="w-full px-4 py-2 flex justify-start items-center gap-2 hover:bg-slate-100 rounded-md cursor-pointer">
            <Avatar size={40} src="/avatar.png"></Avatar>
            <div className="flex flex-col justify-start items-start">
                <p>{username}</p>
                <span className="text-xs text-slate-500">
                    {moment(new Date()).toNow()}
                </span>
            </div>
        </div>
    );
};

export default FriendItem;
