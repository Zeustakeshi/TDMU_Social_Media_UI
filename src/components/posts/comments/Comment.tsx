import React from "react";
import { CommentInput, CommentList } from ".";
import { CommentProvider } from "../../../contexts/Comment.context";
import { comments } from "./schema";

type Props = {};

const Comment: React.FC<Props> = ({}) => {
    return (
        <CommentProvider>
            <div className="custom-scroll max-h-[800px] overflow-y-scroll">
                <CommentList comments={comments}></CommentList>
            </div>
            <CommentInput></CommentInput>
        </CommentProvider>
    );
};
<CommentInput></CommentInput>;
export default Comment;
