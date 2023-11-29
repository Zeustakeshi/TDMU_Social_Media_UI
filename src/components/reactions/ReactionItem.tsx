import { Tooltip } from "@mui/material";
import React, { memo } from "react";
import { ReacttionItemType } from "./ReactionWrapper";

type Props = {} & ReacttionItemType & React.ComponentProps<"button">;

const ReactionItem: React.FC<Props> = ({
    image,
    name,
    value,
    label,
    ...props
}) => {
    return (
        <button className="reaction-item" {...props}>
            <Tooltip title={label} placement="top">
                <img
                    className="reaction-img poi"
                    src={`/reactions/${image}`}
                    alt={`reaction-${name}`}
                />
            </Tooltip>
        </button>
    );
};

export default memo(ReactionItem);
