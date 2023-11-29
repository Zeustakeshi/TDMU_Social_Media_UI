import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonNormal from "./ButtonNormal";

type Props = {} & React.ComponentProps<"button">;

const ButtonLogin: React.FC<Props> = ({
    className,
    onClick,
    children,
    ...props
}) => {
    const navigation = useNavigate();

    const handleClick = (e: any) => {
        onClick?.(e);
        navigation("/auth/login");
    };

    return (
        <ButtonNormal
            onClick={(e) => handleClick(e)}
            className={`bg-primary w-full py-3 px-5 rounded-md text-white font-semibold ${className}`}
            {...props}
        >
            {children || "Đăng Nhập"}
        </ButtonNormal>
    );
};

export default ButtonLogin;
