import React, { useEffect, useState } from "react";
import { CommentInput, CommentList } from ".";
import { CommentItemType } from "../../../common/types/comment.type";
import { CommentProvider } from "../../../contexts/Comment.context";
import { comments as commentSchema } from "./schema";
import CommentListSkeleton from "./CommentListSkeleton";

type Props = { commentCount: number };

const Comment: React.FC<Props> = ({ commentCount }) => {
    const [comments, setCommens] = useState<CommentItemType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await new Promise<CommentItemType[]>((resolve) => {
                setTimeout(() => {
                    resolve(commentSchema);
                }, 2000);
            }).then((data) => {
                setCommens(data);
            });
            setLoading(false);
        })();
    }, []);

    return (
        <CommentProvider>
            <div className="custom-scroll max-h-[800px] overflow-y-scroll">
                {loading ? (
                    <CommentListSkeleton commentCount={commentCount} />
                ) : (
                    <CommentList comments={comments} />
                )}
            </div>
            <CommentInput></CommentInput>
        </CommentProvider>
    );
};
<CommentInput></CommentInput>;
export default Comment;
