import { Skeleton, Tooltip } from "@mui/material";
import React from "react";

type Props = {
    icon?: React.ReactNode;
    url?: string | null;
    tooltipLabel?: string;
    children: React.ReactNode;
    isLoading?: boolean;
};

const ProfileIntroItem: React.FC<Props> = ({
    icon,
    url,
    tooltipLabel,
    children,
    isLoading,
}) => {
    const handleNavigate = () => {
        if (!url) return;
        window.open(url, "_blank");
    };
    return (
        <div
            onClick={handleNavigate}
            className={`text-xl flex justify-start items-center gap-2  w-full p-2 hover:bg-slate-100 rounded-md ${
                url ? "cursor-pointer" : ""
            }`}
        >
            <Tooltip title={tooltipLabel}>
                <span className="text-2xl text-slate-600 mr-5">{icon}</span>
            </Tooltip>
            {isLoading ? (
                <Skeleton variant="text" className="text-base min-w-[200px]" />
            ) : (
                <span className="text-base text-slate-700">{children}</span>
            )}
        </div>
    );
};

export default ProfileIntroItem;
