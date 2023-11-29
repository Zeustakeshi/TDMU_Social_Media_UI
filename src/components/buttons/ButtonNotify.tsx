import { Tooltip } from "@mui/material";
import React from "react";
import { GoBell } from "react-icons/go";
type Props = {};

const ButtonNotify: React.FC<Props> = () => {
    return (
        <Tooltip title="Thông báo">
            <button className="border border-slate-200 p-3 rounded-md cursor-pointer">
                <GoBell></GoBell>
            </button>
        </Tooltip>
    );
};

export default ButtonNotify;
