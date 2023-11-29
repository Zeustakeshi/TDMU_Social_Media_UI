import React from "react";
import Avatar from "../../avatar/Avatar";
import {
    ButtonShowChatInfo,
    ButtonVideoCall,
    ButtonVoiceCall,
} from "../../buttons";

type Props = {
    avatar: string;
    username: string;
    id: string;
    status: "offline" | "online";
};

const MainChatHeader: React.FC<Props> = ({ username, status, avatar }) => {
    return (
        <div className="w-full">
            <div className="w-full p-2  border-b border-b-slate-200 flex justify-between items-center">
                <div className="flex justify-start items-start gap-3">
                    <Avatar src={avatar}></Avatar>
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-lg font-medium">{username}</span>
                        <div className="text-xs text-slate-500 flex justify-start items-center gap-1">
                            {status === "online" && (
                                <div className="relative rounded-full w-2 h-2 flex justify-center items-center ">
                                    <span className=" w-full h-full inline-block rounded-[inherit]  bg-se-green animate-ping"></span>
                                    <span className="w-2 h-2 abs-center   bg-green-500 rounded-[inherit] animate-none"></span>
                                </div>
                            )}
                            <div>
                                {status === "online"
                                    ? "Đang hoạt động"
                                    : "Hoạt động vài phút trước"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <ButtonVoiceCall></ButtonVoiceCall>
                    <ButtonVideoCall></ButtonVideoCall>
                    <ButtonShowChatInfo></ButtonShowChatInfo>
                </div>
            </div>
        </div>
    );
};

export default MainChatHeader;
