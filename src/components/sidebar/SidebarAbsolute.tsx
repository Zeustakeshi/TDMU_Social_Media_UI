import React from "react";

type Props = {
    position?: "right" | "left";
    children: React.ReactNode;
    onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ position = "left", children, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-40">
            <div
                onClick={onClose}
                className="absolute w-full h-full bg-black bg-opacity-40 z-40"
            ></div>
            <div
                className={`relative h-full overflow-y-scroll hidden-scroll z-50 float-${position}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
