import React from "react";
import { ButtonNormal } from ".";
import { ButtonNormalProps } from "./ButtonNormal";

const ButtonPrimary: React.FC<ButtonNormalProps> = ({ children, ...props }) => {
    return (
        <ButtonNormal
            className="bg-primary text-white font-medium px-5 py-3 rounded-md"
            {...props}
        >
            {children}
        </ButtonNormal>
    );
};

export default ButtonPrimary;
