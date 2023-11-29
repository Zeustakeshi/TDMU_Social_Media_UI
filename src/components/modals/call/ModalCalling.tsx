import { ModalProps } from "@mui/material";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import React, { Dispatch, SetStateAction } from "react";
import AcceptCall from "../../call/AcceptCall";
import CallAction from "../../call/actions/CallAction";
import ModalCall from "./ModalCall";

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
} & Omit<ModalProps, "children">;

const ModalCalling: React.FC<Props> = ({ ...props }) => {
    return (
        <ModalCall {...props}>
            <div
                className={` flex flex-col justify-center items-start min-w-full min-h-full p-8 `}
            >
                <AcceptCall></AcceptCall>
                <div className="mt-10 w-full">
                    <CallAction></CallAction>
                </div>
            </div>
        </ModalCall>
    );
};

export default ModalCalling;
