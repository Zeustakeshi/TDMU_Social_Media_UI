import React from "react";

export type ButtonNormalProps = {} & React.ComponentProps<"button">;

const ButtonNormal: React.FC<ButtonNormalProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={`hover:bg-opacity-80 transition-all ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonNormal;
