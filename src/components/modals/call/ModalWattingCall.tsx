import { ModalProps } from "@mui/material";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import React, { Dispatch, SetStateAction } from "react";
import CallAction from "../../call/actions/CallAction";
import ModalCall from "./ModalCall";
import WaittingCall from "../../call/WaittingCall";

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
} & Omit<ModalProps, "children">;

const ModalWatting: React.FC<Props> = ({ ...props }) => {
    return (
        <ModalCall {...props}>
            <div
                className={` flex flex-col justify-center items-start min-w-full min-h-full p-8 `}
            >
                <WaittingCall></WaittingCall>
                <div className="mt-10 w-full">
                    <CallAction></CallAction>
                </div>
            </div>
        </ModalCall>
    );
};

export default ModalWatting;
