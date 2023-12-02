import { Tooltip } from "@mui/material";
import React from "react";

type Props = {
    icon?: React.ReactNode;
    children: React.ReactNode;
    tooltip?: string;
    to?: string;
};

const ProfileAboutItem: React.FC<Props> = ({ tooltip, children, icon, to }) => {
    const handleNavigate = () => {
        if (!to) return;
        window.open(to, "_blank");
    };
    return (
        <div
            onClick={handleNavigate}
            className={`my-5 flex justify-start items-center gap-5 text-lg font-semibold text-slate-600 ${
                to ? "cursor-pointer " : ""
            }`}
        >
            {icon && (
                <Tooltip title={tooltip}>
                    <span className="text-2xl">{icon}</span>
                </Tooltip>
            )}
            <span
                className={`${
                    to
                        ? "hover:underline hover:text-primary transition-all"
                        : ""
                }`}
            >
                {children}
            </span>
        </div>
    );
};

export default ProfileAboutItem;
