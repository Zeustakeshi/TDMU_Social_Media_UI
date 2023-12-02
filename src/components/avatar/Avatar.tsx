import { Avatar as AvatarMUI } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    src?: string;
    className?: string;
    size?: number;
    isOnline?: boolean;
};

const Avatar: React.FC<Props> = ({
    size = 50,
    isOnline = false,
    className = "",
    ...props
}) => {
    return (
        <div
            className={twMerge("group relative border rounded-full", className)}
        >
            <AvatarMUI
                src="/avatar.png"
                className=" border-primary border-[3px]"
                sx={{ width: size, height: size }}
                {...props}
            />
            {isOnline && (
                <>
                    <span className="w-[10%] h-[10%] absolute bottom-[5%] right-0 p-1 bg-se-green rounded-full animate-ping "></span>
                    <span className="absolute w-[8%] h-[8%] bottom-[5%] right-0 p-1 bg-se-green rounded-full"></span>
                </>
            )}
        </div>
    );
};

export default Avatar;
