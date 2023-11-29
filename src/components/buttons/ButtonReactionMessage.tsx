import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MessageReactionType } from "../../common/types/chat.type";
import ReactionWrapper from "../reactions/ReactionWrapper";

type Props = {
    initialReaction: MessageReactionType;
    isCurrentUser: boolean;
};

const ButtonReactionMessage: React.FC<Props> = ({
    initialReaction,
    isCurrentUser,
}) => {
    const handleAcitveReaction = () => {};
    const handleDeactiveReaction = () => {};

    return (
        <ReactionWrapper
            position="top"
            size="sm"
            initialReaction={initialReaction}
            onActiveReaction={handleAcitveReaction}
            onDeactiveReaction={handleDeactiveReaction}
            showRemove
        >
            {(activeReaction, onToggleReaction) => (
                <button
                    onClick={onToggleReaction}
                    className="flex justify-center items-center gap-2"
                >
                    {activeReaction && (
                        <div className="order-2 w-5 h-5 bg-white p-[2px] rounded-full">
                            <img
                                className="object-cover w-full h-ful pointer-events-none"
                                src={`/reactions/${activeReaction?.image}`}
                                alt=""
                            />
                        </div>
                    )}

                    <div
                        className={`order-${
                            isCurrentUser ? "1" : "2"
                        } bg-white rounded-full relative w-5 h-5 flex justify-center items-center p-[1px]`}
                    >
                        <AiOutlineLike></AiOutlineLike>
                    </div>
                </button>
            )}
        </ReactionWrapper>
    );
};

export default ButtonReactionMessage;
