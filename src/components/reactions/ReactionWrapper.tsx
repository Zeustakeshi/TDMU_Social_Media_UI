import React, { useState } from "react";
import "../../styles/reaction.css";
import { ReactionType } from "../../common/types/reaction.type";
import { reactions } from "../../utils/reaction.util";
import ReactionItem from "./ReactionItem";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Tooltip } from "@mui/material";

export type ReacttionItemType = {
    label: string;
    name: string;
    image: string;
    value: number;
};

type Props = {
    children: (
        activeReaction: ReacttionItemType | null,
        onToggleReaction: () => void
    ) => React.ReactNode;
    onActiveReaction: (value: number) => void;
    onDeactiveReaction: () => void;
    initialReaction: ReactionType;
    position?: "top" | "right" | "left" | "bottom" | "top-left" | "top-right";
    size?: "sm" | "md" | "lg";
    showRemove?: boolean;
};

const ReactionWrapper: React.FC<Props> = ({
    children,
    onActiveReaction,
    onDeactiveReaction,
    initialReaction,
    position = "top-left",
    size = "md",
    showRemove = false,
}) => {
    const [activeReaction, setActiveReaciton] =
        useState<ReacttionItemType | null>(() => {
            return (
                reactions.find((item) => item.value === initialReaction) || null
            );
        });

    const handleClickAciton = (reaction: ReacttionItemType) => {
        onActiveReaction(reaction.value);
        setActiveReaciton(reaction);
    };

    const handleToggleReaction = () => {
        if (activeReaction === null) {
            // active
            const defaultReaction = reactions[0];
            setActiveReaciton(defaultReaction);
            onActiveReaction(defaultReaction.value);
        } else {
            //deactive
            onDeactiveReaction();
            setActiveReaciton(null);
        }
    };

    return (
        <div className="reaction-wrapper">
            {children(activeReaction, handleToggleReaction)}
            <div
                className={`reaction-box reaction-box--${position} reaction-box--${size}`}
            >
                {reactions.map((reaction) => {
                    return (
                        <ReactionItem
                            onClick={() => handleClickAciton(reaction)}
                            key={reaction.value}
                            {...reaction}
                        ></ReactionItem>
                    );
                })}
                {showRemove && (
                    <Tooltip title="Hủy" placement="top">
                        <button onClick={() => setActiveReaciton(null)}>
                            <AiOutlineCloseCircle />
                        </button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
};

export default ReactionWrapper;
