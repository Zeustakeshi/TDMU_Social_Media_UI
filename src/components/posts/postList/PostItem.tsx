import moment from "moment";
import React, { useState } from "react";
import { PostType } from "../../../common/types/post.type";
import { getPostPrivacy } from "../../../utils/post.util";
import Avatar from "../../avatar/Avatar";
import { ButtonReactionPost } from "../../buttons";
import Card from "../../cards/Cards";
import { Comment } from "../comments";
import ActionCommentPost from "./actions/ActionCommentPost";
import ActionSettingPost from "./actions/ActionSettingPost";
import ActionSharePost from "./actions/ActionSharePost";
import UserInfoCard from "../../cards/UserInfoCard";

type Props = {} & PostType;

const PostItem: React.FC<Props> = (props) => {
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <Card
            className="last:mb-0 mb-5 "
            headerLine={false}
            header={
                <div className="w-full flex justify-between items-start">
                    <UserInfoCard
                        user={props.owner}
                        className="flex justify-start items-center gap-5"
                    >
                        <Avatar size={50} src={props.owner.avatar}></Avatar>
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-medium">
                                {props.owner.username}
                            </p>
                            <p className="text-xs font-medium text-slate-600">
                                <span>{moment(props.createdAt).toNow()}</span>,
                                <span>{getPostPrivacy(props.privacy)}</span>
                            </p>
                        </div>
                    </UserInfoCard>

                    <ActionSettingPost></ActionSettingPost>
                </div>
            }
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-[700px] h-[500px] rounded-lg overflow-hidden">
                    <img
                        src={props.imageUrl}
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
                        {props.actions.likeCount}
                    </span>
                </div>
                <div className="flex justify-end items-center gap-5 text-sm text-slate-600 font-semibold my-4">
                    <p>
                        <span>{props.actions.commentCount} </span>
                        <span>Bình luận</span>
                    </p>
                    <p>
                        <span>{props.actions.shareCount} </span>
                        <span>Chia sẻ</span>
                    </p>
                </div>
            </div>

            <div className="border-t border-b border-slate-200 p-3 flex justify-between items-center">
                <ButtonReactionPost
                    postId={props.id}
                    initialReaction={props.actions.reaction}
                ></ButtonReactionPost>
                <ActionCommentPost
                    setShowComment={setShowComment}
                ></ActionCommentPost>
                <ActionSharePost></ActionSharePost>
            </div>
            {showComment && (
                <Comment commentCount={props.actions.commentCount}></Comment>
            )}
        </Card>
    );
};

export default PostItem;
