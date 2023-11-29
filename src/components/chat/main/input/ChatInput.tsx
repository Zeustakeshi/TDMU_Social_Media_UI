import React, { ChangeEvent, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import Menu from "../../../menu/Menu";
import MenuContentWrapper from "../../../menu/MenuContentWrapper";
import ChatInputAction from "./ChatInputAction";

type Props = {};

const ChatInput: React.FC<Props> = ({}) => {
    const [message, setMessage] = useState<string>("");

    const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "inherit";
        e.target.style.height = e.target.scrollHeight + "px";
        setMessage(e.target.value);
    };

    return (
        <div>
            <ChatInputAction></ChatInputAction>
            <form className="w-full flex justify-between items-center gap-4 border-t border-t-slate-200 focus-within:border-t-primary p-2">
                <textarea
                    value={message}
                    rows={1}
                    cols={60}
                    maxLength={8000}
                    autoFocus
                    className="custom-scroll w-full h-full px-2 py-2 rounded-md border-none outline-none text-base resize-none max-h-[120px]"
                    placeholder="Nhập tin nhắn của bạn"
                    onChange={handleChangeMessage}
                />
                <Menu
                    position="top-left"
                    label={
                        <button className="relative">
                            <BiHappy></BiHappy>
                        </button>
                    }
                >
                    <MenuContentWrapper>
                        hello
                        {/* <EmojiPicker /> */}
                    </MenuContentWrapper>
                </Menu>
                <button className="p-3 bg-primary rounded-md shadow-primary shadow text-white">
                    <AiOutlineSend></AiOutlineSend>
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
