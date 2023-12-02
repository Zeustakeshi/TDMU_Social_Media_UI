import React from "react";

type Props = {
    title?: string;
    children: React.ReactNode;
    className?: string;
};

const InputGroup: React.FC<Props> = ({ title, children, className }) => {
    return (
        <div
            className={`m-4 flex flex-col w-full justify-start items-start gap-3 ${
                className ? className : ""
            }`}
        >
            <h3 className="text-2xl text-slate-500 font-medium mb-3">
                {title}
            </h3>
            {children}
        </div>
    );
};

export default InputGroup;
