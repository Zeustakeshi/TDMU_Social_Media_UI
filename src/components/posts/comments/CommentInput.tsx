import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import React, { ChangeEvent, useState } from "react";
import {
    AiOutlineFileGif,
    AiOutlineFileImage,
    AiOutlineSend,
} from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { useComment } from "../../../contexts/Comment.context";
import Menu from "../../menu/Menu";
import MenuContentWrapper from "../../menu/MenuContentWrapper";
import { IoMdClose } from "react-icons/io";
import Avatar from "../../avatar/Avatar";

type Props = {};

const CommentInput: React.FC<Props> = () => {
    const { commentInputRef, parentComment, setParentComment } = useComment();
    const [commentText, setCommentText] = useState<string>("");

    const handleComment = async () => {
        console.log({ commentText, parentComment });
    };

    const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "inherit";
        e.target.style.height = e.target.scrollHeight + "px";
        setCommentText(e.target.value);
    };

    return (
        <>
            {parentComment && (
                <div className="group relative text-slate-500 bg-slate-100 backdrop-blur bg-opacity-60 p-3 rounded-md">
                    <span
                        onClick={() => setParentComment(null)}
                        className="hidden group-hover:flex justify-center items-center text-white cursor-pointer w-[20px] h-[20px] absolute right-0 top-0 bg-gray-300 rounded-full"
                    >
                        <IoMdClose />
                    </span>
                    <p className="text-slate-600 font-semibold">
                        {parentComment.owner.username}
                    </p>
                    <p>{parentComment.comment}</p>
                </div>
            )}
            <div className="py-3 flex justify-between items-start gap-4">
                <Avatar size={45} src="/avatar.png"></Avatar>
                <div className="flex-1 w-full flex justify-between items-center border rounded-lg border-slate-200 focus-within:border-primary ">
                    <div className="w-full">
                        <textarea
                            value={commentText}
                            onChange={handleChangeText}
                            ref={commentInputRef}
                            className="w-full px-3 py-2 outline-none custom-scroll resize-none max-h-[120px]"
                            placeholder="nhập bình luận"
                            autoFocus
                            draggable={false}
                            maxLength={3000}
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center gap-4 h-full">
                    <div className="flex justify-center items-center h-full gap-2 text-primary">
                        <button>
                            <AiOutlineFileGif></AiOutlineFileGif>
                        </button>
                        <button>
                            <AiOutlineFileImage></AiOutlineFileImage>
                        </button>

                        <Menu
                            position="top-left"
                            label={
                                <button className="relative">
                                    <BiHappy></BiHappy>
                                </button>
                            }
                        >
                            <MenuContentWrapper>
                                <EmojiPicker
                                    lazyLoadEmojis
                                    onEmojiClick={({
                                        emoji,
                                    }: EmojiClickData) => {
                                        setCommentText(
                                            (prev) => prev + ` ${emoji}`
                                        );
                                    }}
                                />
                            </MenuContentWrapper>
                        </Menu>
                    </div>
                    <button
                        onClick={handleComment}
                        className="w-[50px] h-[50px] flex justify-center items-center text-primary bg-primary bg-opacity-25 rounded-md"
                    >
                        <AiOutlineSend></AiOutlineSend>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CommentInput;
