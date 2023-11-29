import React, { useState } from "react";
import { CommentList } from ".";
import { CommentItemType } from "../../../common/types/comment.type";
import Avatar from "../../avatar/Avatar";
import CommentItemAction from "./CommentItemAction";
import moment from "moment";

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
                            userId: "1",
                            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <div className="w-[30px] h-[30px] mt-2">
                    <Avatar size={30} src={props.owner.avatar}></Avatar>
                </div>
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
                        <div className="text-slate-400 text-sm">
                            đang tải ....
                        </div>
                    ) : (
                        <CommentList comments={childrens}></CommentList>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommentItem;
