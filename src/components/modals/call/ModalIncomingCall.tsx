import React, { Dispatch, SetStateAction } from "react";
import { ModalCall } from ".";
import { ModalProps } from "@mui/material";
import Avatar from "../../avatar/Avatar";
import { AiOutlineClose, AiOutlinePhone } from "react-icons/ai";
type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
} & Omit<ModalProps, "children">;

const ModalIncomingCall: React.FC<Props> = ({ ...props }) => {
    return (
        <ModalCall canFullScreen={false} {...props}>
            <div className="flex flex-col justify-start items-center gap-4">
                <Avatar size={130}></Avatar>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="text-sm font-semibold text-slate-600">
                        Cuộc gọi từ
                    </h3>
                    <h3 className="text-lg font-medium text-slate-900">
                        Nguyen Van A
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-20 my-8">
                    <button className=" p-5 text-xl text-white bg-se-red rounded-full relative">
                        <AiOutlineClose></AiOutlineClose>
                    </button>
                    <button className="relative p-5 text-xl text-white bg-se-green rounded-full">
                        <span className="absolute top-0 left-0 w-full h-full bg-se-green rounded-[inherit] animate-ping"></span>
                        <AiOutlinePhone></AiOutlinePhone>
                    </button>
                </div>
            </div>
        </ModalCall>
    );
};

export default ModalIncomingCall;
