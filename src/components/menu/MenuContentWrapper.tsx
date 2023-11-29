import React from "react";
import { useMenu } from "../../contexts/Menu.context";
import useClickOutSide from "../../hooks/useClickOutSide";

type IMenuContentWrapperProps = {
    className?: string;
    children: React.ReactNode;
};

const MenuContentWrapper: React.FC<IMenuContentWrapperProps> = ({
    className = "",
    children,
}) => {
    const { menuRef, show, setShow, setHistory } = useMenu();

    const { nodeRef: clickRef } = useClickOutSide<HTMLDivElement>(() => {
        setShow(false);
        setHistory((prev) => (prev.length > 1 ? prev.slice(0, 1) : prev));
    }, menuRef);

    if (!show) return <></>;
    return (
        // <Portal>
        <div ref={clickRef} className={`absolute z-40 ${className}`}>
            {children}
        </div>
        // </Portal>
    );
};

export default MenuContentWrapper;
