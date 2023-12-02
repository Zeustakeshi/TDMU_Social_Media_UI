import React from "react";
import SettingHeader from "./SettingHeader";

type Props = {
    children: React.ReactNode;
    header: string;
};

const SettingContainer = ({ children, header }: Props) => {
    return (
        <div className="p-5 flex-1 min-h-[750px] flex flex-col justify-start items-start">
            <SettingHeader>{header}</SettingHeader>
            {children}
        </div>
    );
};

export default SettingContainer;
