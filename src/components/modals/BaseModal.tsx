import { Portal } from "@mui/material";
import React from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const BaseModal: React.FC<Props> = ({ open, onClose, children }) => {
    if (!open) return <></>;
    return (
        <Portal>
            <div
                onClick={onClose}
                className="w-screen h-screen z-50 bg-black fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-opacity-30 flex justify-center items-center"
            >
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
        </Portal>
    );
};

export default BaseModal;
