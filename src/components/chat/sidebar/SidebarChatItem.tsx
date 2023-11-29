import React, { useState } from "react";
import Avatar from "../../avatar/Avatar";
import moment from "moment";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../../redux/fetures/chat.slice";
import { SidebarChatItemType } from "../../../common/types/chat.type";

const SidebarChatItem: React.FC<SidebarChatItemType> = (props) => {
    const [hasNotify] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleSetCurrentChat = () => {
        dispatch(setCurrentChat(props));
    };

    return (
        <button
            onClick={handleSetCurrentChat}
            className="w-full flex justify-between items-center p-4 hover:bg-slate-50 rounded-md cursor-pointer"
        >
            <div className="flex justify-start items-center gap-3">
                <div className="relative">
                    <Avatar
                        src={props.atavar}
                        className="shadow-sm"
                        isOnline={props.status === "online"}
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <span>{props.username}</span>
                    <span className="text-xs text-gray-500 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[100px]">
                        {props.lastMessage}
                    </span>
                </div>
            </div>
            <div className="h-full flex flex-col justify-start items-end gap-1">
                <p className="text-xs">{moment(props.updateAt).toNow()}</p>
                {hasNotify ? (
                    <button className="w-[22px] h-[22px] flex justify-center items-center text-xs bg-rose-500 text-white rounded-md">
                        1
                    </button>
                ) : (
                    <button className="w-[22px] h-[22px] flex justify-center items-center text-xs bg-primary bg-opacity-10 text-primary rounded-md">
                        <AiOutlineStar></AiOutlineStar>
                    </button>
                )}
            </div>
        </button>
    );
};

export default SidebarChatItem;
