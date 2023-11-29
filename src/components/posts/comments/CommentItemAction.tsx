import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useComment } from "../../../contexts/Comment.context";
import { CommentItemType } from "../../../common/types/comment.type";

type Props = {
    parent: CommentItemType;
};

const CommentItemAction: React.FC<Props> = ({ parent }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const { commentInputRef, setParentComment } = useComment();

    const handleLike = async () => {
        setLiked((prev) => !prev);
    };

    const handleReply = async () => {
        ///
        commentInputRef.current?.focus();
        setParentComment(parent);
    };

    return (
        <div className="my-1 min-w-[200px] flex justify-end items-center gap-4">
            <Tooltip title={!liked ? "thích" : "hủy"}>
                <span
                    onClick={handleLike}
                    className={`text-slate-600 font-medium hover:text-red-500 cursor-pointer ${
                        liked ? "font-semibold text-rose-500" : ""
                    }`}
                >
                    thích
                </span>
            </Tooltip>
            <Tooltip title="phản hồi">
                <span
                    onClick={handleReply}
                    className="text-slate-600 font-medium hover:text-primary cursor-pointer"
                >
                    phản hồi
                </span>
            </Tooltip>
        </div>
    );
};

export default CommentItemAction;
