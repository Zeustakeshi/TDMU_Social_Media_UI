import React from "react";
import { CommentItem } from ".";
import { CommentItemType } from "../../../common/types/comment.type";

type Props = {
    comments: CommentItemType[];
};

const CommentList: React.FC<Props> = ({ comments }) => {
    // listen parent change

    return (
        <>
            <div className="p-2 w-full">
                {comments.map((comment) => {
                    return (
                        <CommentItem
                            key={comment.id}
                            {...comment}
                        ></CommentItem>
                    );
                })}
            </div>
        </>
    );
};

export default CommentList;
