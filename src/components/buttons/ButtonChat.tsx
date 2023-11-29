import { Tooltip } from "@mui/material";
import React from "react";
import { RiMessengerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type Props = {};

const ButtonChat: React.FC<Props> = ({}) => {
    const navigation = useNavigate();

    return (
        <Tooltip title="Tin nhắn">
            <button
                onClick={() => navigation("/chats")}
                className="border border-slate-200 p-3 rounded-md cursor-pointer  hover:text-primary"
            >
                <RiMessengerLine />
            </button>
        </Tooltip>
    );
};

export default ButtonChat;
