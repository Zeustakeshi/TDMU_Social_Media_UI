import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonNormal } from "../buttons";

type Props = {
    children: React.ReactNode;
    className?: string;
} & React.ComponentProps<"button">;

const SettingItem = ({ children, className, ...props }: Props) => {
    return (
        <ButtonNormal
            className={twMerge(
                "w-full cursor-pointer hover:bg-slate-200 px-3 py-2 rounded-md",
                className
            )}
            {...props}
        >
            {children}
        </ButtonNormal>
    );
};

export default SettingItem;
