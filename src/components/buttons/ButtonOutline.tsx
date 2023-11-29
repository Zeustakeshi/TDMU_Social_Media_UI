import React from "react";
import ButtonNormal, { ButtonNormalProps } from "./ButtonNormal";

type Props = {} & ButtonNormalProps;

const ButtonOutline: React.FC<Props> = ({ children, ...props }) => {
    return (
        <ButtonNormal
            className="border border-slate-600 font-medium px-5 py-3 rounded-md"
            {...props}
        >
            {children}
        </ButtonNormal>
    );
};

export default ButtonOutline;
