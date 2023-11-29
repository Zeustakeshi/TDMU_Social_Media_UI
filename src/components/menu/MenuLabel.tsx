import React from "react";
import { useMenu } from "../../contexts/Menu.context";

interface IMenuLabel {
    children: React.ReactNode;
}

const MenuLabel: React.FC<IMenuLabel> = ({ children }) => {
    const menu = useMenu();

    const handleToggleMenu = () => {
        if (menu.show) {
            menu.setShow(false);
            menu.setHistory((prev) =>
                prev.length > 1 ? prev.slice(0, 1) : prev
            );
        } else {
            menu.setShow(true);
        }
    };

    return (
        <div
            className="w-full h-full flex justify-center items-center"
            onClick={handleToggleMenu}
        >
            {children}
        </div>
    );
};

export default MenuLabel;
