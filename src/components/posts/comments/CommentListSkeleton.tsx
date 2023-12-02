import CommentItemSkeleton from "./CommentItemSkeleton";

type Props = {
    commentCount: number;
};

const CommentListSkeleton: React.FC<Props> = ({ commentCount }) => {
    // listen parent change
    return (
        <>
            <div className="p-2 w-full">
                {new Array(commentCount).fill(0).map((_, index) => {
                    return (
                        <CommentItemSkeleton key={index}></CommentItemSkeleton>
                    );
                })}
            </div>
        </>
    );
};

export default CommentListSkeleton;
