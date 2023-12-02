import React, { useState } from "react";
import { CommentList } from ".";
import { CommentItemType } from "../../../common/types/comment.type";
import Avatar from "../../avatar/Avatar";
import CommentItemAction from "./CommentItemAction";
import moment from "moment";
import CommentListSkeleton from "./CommentListSkeleton";
import UserInfoCard from "../../cards/UserInfoCard";

type Props = {} & CommentItemType;

const CommentItem: React.FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showChildren, setShowChildren] = useState<boolean>(false);
    const [childrens, setChildrens] = useState<CommentItemType[]>([]);

    const fetchChildren = async () => {
        await new Promise<CommentItemType[]>((reslove) => {
            setTimeout(() => {
                const childrens: CommentItemType[] = [];
                for (let i = 0; i < props.childrenCount; ++i) {
                    childrens.push({
                        id: crypto.randomUUID(),
                        comment: "world fake",
                        owner: {
                            id: crypto.randomUUID(),
                            shortDescription:
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
                            email: `spiderman@gmail.com`,
                            social: {
                                facebook: `https://facebook.com`,
                                instagram: `https://instagram.com`,
                                twitter: `https://twitter.com`,
                            },
                            avatar: `https://source.unsplash.com/featured/?spiderman`,
                            username: "spiderman",
                        },
                        childrenCount: Math.floor(Math.random() * 2),
                        parentId: props.parentId,
                    });
                }

                reslove(childrens);
            }, 2000);
        }).then((data: CommentItemType[]) => {
            setChildrens(data);
        });
    };

    const handleShowChildren = async () => {
        if (showChildren) {
            setShowChildren(false);
            setChildrens([]);
            return;
        }
        setLoading(true);
        await fetchChildren();
        setShowChildren(true);
        setLoading(false);
    };

    return (
        <div className="my-2">
            <div className="flex justify-start items-start gap-4 max-w-max  ">
                <UserInfoCard user={props.owner}>
                    <div className="w-[30px] h-[30px] mt-2">
                        <Avatar size={30} src={props.owner.avatar}></Avatar>
                    </div>
                </UserInfoCard>
                <div className="w-full max-w-max">
                    <div className="bg-slate-100 px-5 py-3 rounded-lg ">
                        <div className="flex w-full justify-between items-center">
                            <span className="block font-semibold">
                                {props.owner.username}
                            </span>
                            <span className="text-xs text-slate-500">
                                {moment(
                                    new Date().toLocaleDateString()
                                ).fromNow()}
                            </span>
                        </div>
                        <p>{props.comment}</p>
                    </div>

                    <CommentItemAction parent={props}></CommentItemAction>
                </div>
            </div>
            {props.childrenCount > 0 && (
                <div className="ml-12">
                    <div
                        onClick={handleShowChildren}
                        className=" hover:text-primary hover:underline hover:font-semibold cursor-pointer text-sm text-slate-500"
                    >
                        {`${showChildren ? "ẩn" : ""} ${
                            props.childrenCount
                        } phản hồi`}
                    </div>

                    {loading ? (
                        <CommentListSkeleton
                            commentCount={props.childrenCount}
                        ></CommentListSkeleton>
                    ) : (
                        <CommentList comments={childrens}></CommentList>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentItem;
