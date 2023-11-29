import React from "react";
import ButtonNormal from "./ButtonNormal";
import { AiOutlineGoogle } from "react-icons/ai";

type Props = {};

const ButtonLoginWithGoogle: React.FC<Props> = ({}) => {
    return (
        <ButtonNormal className="flex justify-center items-center gap-2 px-5 py-2 bg-gray-100 rounded-md font-medium text-slate-600">
            <span>
                <AiOutlineGoogle></AiOutlineGoogle>
            </span>
            <span className="hidden sm:inline-block">Tiếp tục với google</span>
        </ButtonNormal>
    );
};

export default ButtonLoginWithGoogle;
