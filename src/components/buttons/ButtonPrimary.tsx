import React from "react";
import { ButtonNormal } from ".";
import { ButtonNormalProps } from "./ButtonNormal";
import { twMerge } from "tailwind-merge";

const ButtonPrimary: React.FC<ButtonNormalProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <ButtonNormal
            className={twMerge(
                "bg-primary text-white font-medium px-5 py-3 rounded-md",
                className
            )}
            {...props}
        >
            {children}
        </ButtonNormal>
    );
};

export default ButtonPrimary;
