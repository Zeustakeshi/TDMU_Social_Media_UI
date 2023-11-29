import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

type Props = {};

const ButtonVideoCall: React.FC<Props> = ({}) => {
    return (
        <button className="p-3 hover:bg-slate-100 rounded-md">
            <HiOutlineVideoCamera></HiOutlineVideoCamera>
        </button>
    );
};

export default ButtonVideoCall;
