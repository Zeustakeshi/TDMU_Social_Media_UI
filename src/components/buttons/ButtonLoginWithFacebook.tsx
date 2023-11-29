import React from "react";
import ButtonNormal from "./ButtonNormal";
import { FaFacebookF } from "react-icons/fa";
type Props = {};

const ButtonLoginWithFacebook: React.FC<Props> = ({}) => {
    return (
        <ButtonNormal className="flex justify-center items-center gap-2 px-5 py-2 bg-gray-100 rounded-md font-medium text-slate-600">
            <span>
                <FaFacebookF></FaFacebookF>
            </span>
            <span className="hidden sm:inline-block">
                Tiếp tục với facebook
            </span>
        </ButtonNormal>
    );
};

export default ButtonLoginWithFacebook;
