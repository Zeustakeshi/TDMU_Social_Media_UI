import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    title: string;
    children: React.ReactNode;
    className?: string;
    wrapperClassName?: string;
};

const SettingGroup: React.FC<Props> = ({
    title,
    children,
    className,
    wrapperClassName,
}) => {
    return (
        <div
            className={twMerge(
                "m-4 flex flex-col w-full max-w-full justify-start items-start ",
                className
            )}
        >
            <h3 className={"text-2xl text-slate-500 font-medium mb-3"}>
                {title}
            </h3>
            <div className={twMerge("ml-4 w-full", wrapperClassName)}>
                {children}
            </div>
        </div>
    );
};

export default SettingGroup;
