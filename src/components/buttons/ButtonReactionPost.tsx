import React from "react";
import ReactionWrapper from "../reactions/ReactionWrapper";
import { PostReactionType } from "../../common/types/post.type";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
    postId: string;
    initialReaction: PostReactionType;
} & React.ComponentProps<"button">;

const ButtonReactionPost: React.FC<Props> = ({ initialReaction }) => {
    const handleAcitveReaction = () => {};
    const handleDeactiveReaction = () => {};

    return (
        <ReactionWrapper
            initialReaction={initialReaction}
            onActiveReaction={handleAcitveReaction}
            onDeactiveReaction={handleDeactiveReaction}
        >
            {(activeReaction, onToggleReaction) => {
                return (
                    <button
                        onClick={onToggleReaction}
                        className={`post-action-item ${
                            activeReaction?.name
                                ? `reaction-active-label reaction-active-label--${activeReaction.name}`
                                : ""
                        }`}
                    >
                        <div className="w-5 h-5">
                            {activeReaction?.image ? (
                                <img
                                    className="object-cover w-full h-ful pointer-events-none"
                                    src={`/reactions/${activeReaction?.image}`}
                                    alt=""
                                />
                            ) : (
                                <AiOutlineLike></AiOutlineLike>
                            )}
                        </div>

                        <span>{activeReaction?.label || "Thích"}</span>
                    </button>
                );
            }}
        </ReactionWrapper>
    );
};

export default ButtonReactionPost;
