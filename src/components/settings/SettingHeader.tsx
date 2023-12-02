import React from "react";

type Props = {
    children: React.ReactNode;
};

const SettingHeader = ({ children }: Props) => {
    return (
        <h1 className="text-3xl mb-10 text-slate-500 font-semibold">
            {children}
        </h1>
    );
};

export default SettingHeader;
