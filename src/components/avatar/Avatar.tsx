import React from "react";
import { Avatar as AvatarMUI } from "@mui/material";
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
        <div className={`relative border rounded-full ${className}`}>
            <AvatarMUI
                src="/avatar.png"
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
