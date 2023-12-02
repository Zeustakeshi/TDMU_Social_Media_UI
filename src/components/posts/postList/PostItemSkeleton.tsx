import { Skeleton } from "@mui/material";
import { useState } from "react";
import { ButtonReactionPost } from "../../buttons";
import Card from "../../cards/Cards";
import { Comment } from "../comments";
import ActionCommentPost from "./actions/ActionCommentPost";
import ActionSettingPost from "./actions/ActionSettingPost";
import ActionSharePost from "./actions/ActionSharePost";

const PostItemSkeleton = () => {
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <Card
            className="last:mb-0 mb-5 "
            headerLine={false}
            header={
                <div className="w-full flex justify-between items-start">
                    <div className="flex justify-start items-center gap-5 w-full">
                        <Skeleton variant="circular" width={50} height={50} />
                        <div className="flex-1 flex flex-col justify-start items-start">
                            <Skeleton
                                variant="text"
                                className="w-full max-w-[200px]"
                                sx={{ fontSize: "40px" }}
                            />
                            <div className="w-full text-xs font-medium text-slate-600">
                                <Skeleton
                                    variant="text"
                                    className="w-full max-w-[100px]"
                                    sx={{ fontSize: "0.75rem" }}
                                />
                                <Skeleton
                                    variant="text"
                                    className="w-full max-w-[50px]"
                                    sx={{ fontSize: "0.75rem" }}
                                />
                            </div>
                        </div>
                    </div>
                    <ActionSettingPost></ActionSettingPost>
                </div>
            }
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-[700px] h-[500px] rounded-lg overflow-hidden">
                    <Skeleton variant="rectangular" width={700} height={500} />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                    <div className="w-[20px] h-[20px] rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="/reactions/like.png"
                            alt="like-count"
                        />
                    </div>
                    <span className="text-sm text-slate-500 font-medium">
                        <Skeleton
                            variant="rectangular"
                            width={20}
                            height={20}
                        />
                    </span>
                </div>
                <div className="flex justify-end items-center gap-5 text-sm text-slate-600 font-semibold my-4">
                    <div className="flex gap-2">
                        <Skeleton
                            variant="rectangular"
                            width={20}
                            height={20}
                        />
                        <span>Bình luận</span>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton
                            variant="rectangular"
                            width={20}
                            height={20}
                        />
                        <span>Chia sẻ</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-b border-slate-200 p-3 flex justify-between items-center">
                <ButtonReactionPost
                    postId={""}
                    initialReaction={null}
                ></ButtonReactionPost>
                <ActionCommentPost
                    setShowComment={setShowComment}
                ></ActionCommentPost>
                <ActionSharePost></ActionSharePost>
            </div>
            {showComment && <Comment commentCount={2}></Comment>}
        </Card>
    );
};

export default PostItemSkeleton;
