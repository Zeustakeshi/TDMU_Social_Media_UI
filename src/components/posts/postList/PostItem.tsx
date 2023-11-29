import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { ButtonReactionPost } from "../../buttons";
import Card from "../../cards/Cards";
import { Comment } from "../comments";
import ActionCommentPost from "./actions/ActionCommentPost";
import ActionSettingPost from "./actions/ActionSettingPost";
import ActionSharePost from "./actions/ActionSharePost";

type Props = {};

const PostItem: React.FC<Props> = () => {
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <Card
            className="last:mb-0 mb-5 "
            headerLine={false}
            header={
                <div className="w-full flex justify-between items-start">
                    <div className="flex justify-start items-center gap-5">
                        <Avatar
                            sx={{ width: 50, height: 50 }}
                            src="avatar.png"
                        ></Avatar>
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-medium">Minh Hieu</p>
                            <p className="text-xs font-medium text-slate-600">
                                <span>15p</span>, <span>Công khai</span>
                            </p>
                        </div>
                    </div>
                    <ActionSettingPost></ActionSettingPost>
                </div>
            }
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-[700px] h-[500px] rounded-lg overflow-hidden">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fpost_example.jpg?alt=media"
                        alt="post-img"
                        className="absolute w-full h-full object-cover rounded-[inherit]"
                    />
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
                        20
                    </span>
                </div>
                <div className="flex justify-end items-center gap-5 text-sm text-slate-600 font-semibold my-4">
                    <p>
                        <span>3 </span>
                        <span>Bình luận</span>
                    </p>
                    <p>
                        <span>12 </span>
                        <span>Chia sẻ</span>
                    </p>
                </div>
            </div>

            <div className="border-t border-b border-slate-200 p-3 flex justify-between items-center">
                <ButtonReactionPost
                    postId=""
                    initialReaction={null}
                ></ButtonReactionPost>
                <ActionCommentPost
                    setShowComment={setShowComment}
                ></ActionCommentPost>
                <ActionSharePost></ActionSharePost>
            </div>
            {showComment && <Comment></Comment>}
        </Card>
    );
};

export default PostItem;
