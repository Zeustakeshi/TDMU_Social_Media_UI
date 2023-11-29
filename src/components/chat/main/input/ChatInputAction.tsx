import { Tooltip } from "@mui/material";
import React from "react";
import { BiImage } from "react-icons/bi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { RiEmojiStickerLine } from "react-icons/ri";

type Props = {};

const ChatInputAction: React.FC<Props> = ({}) => {
    return (
        <div className="w-full justify-start items-center gap-4 px-3 py-1">
            <Tooltip title="hình ảnh" placement="top">
                <button className="p-2 rounded-md hover:bg-slate-100 transition-all">
                    <BiImage></BiImage>
                </button>
            </Tooltip>
            <Tooltip title="Sticker" placement="top">
                <button className="p-2 rounded-md hover:bg-slate-100 transition-all">
                    <RiEmojiStickerLine></RiEmojiStickerLine>
                </button>
            </Tooltip>
            <Tooltip title="File" placement="top">
                <button className="p-2 rounded-md hover:bg-slate-100 transition-all">
                    <HiOutlinePaperClip></HiOutlinePaperClip>
                </button>
            </Tooltip>
        </div>
    );
};

export default ChatInputAction;
