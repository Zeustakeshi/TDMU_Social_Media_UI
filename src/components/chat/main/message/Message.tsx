import moment from "moment";
import React from "react";
import { MessageType } from "../../../../common/types/chat.type";
import { ButtonReactionMessage } from "../../../buttons";
import Avatar from "../../../avatar/Avatar";

const Message: React.FC<MessageType> = (props) => {
    const isCurrentUser = props.user.id === "1";
    return (
        <>
            <div
                className={`my-8 w-full flex justify-${
                    isCurrentUser ? "end" : "start"
                }`}
            >
                <div className="flex justify-start items-start gap-2">
                    {!isCurrentUser && <Avatar></Avatar>}
                    <div
                        className={`p-3 rounded-md relative group
                    ${
                        isCurrentUser
                            ? "bg-primary shadow-primary text-white"
                            : "bg-gray-100"
                    }`}
                    >
                        <p className="max-w-[600px] leading-relaxed">
                            {props.content}
                        </p>
                        <span
                            className={`text-xs ${
                                isCurrentUser ? "float-right" : "float-left"
                            }`}
                        >
                            {moment(props.createdAt).format("hh:mm")}
                        </span>
                        {!isCurrentUser && (
                            <div
                                className={`absolute bottom-0 translate-y-[50%] ${
                                    isCurrentUser ? "left-1" : "right-1"
                                } text-xs text-slate-800 flex justify-center items-center`}
                            >
                                <ButtonReactionMessage
                                    initialReaction={null}
                                    isCurrentUser={isCurrentUser}
                                />
                            </div>
                        )}

                        {!isCurrentUser && (
                            <span className="absolute top-[calc(100%+5px)] left-0 text-xs font-medium text-slate-600">
                                Đã xem
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;
