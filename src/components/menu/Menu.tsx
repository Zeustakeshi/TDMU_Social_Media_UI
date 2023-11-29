import React, { useRef } from "react";
import {
    MenuSchemaType,
    MenuItemType,
    MenuPositionType,
} from "../../common/types/menu.type";
import { MenuProvider } from "../../contexts/Menu.context";
import MenuLabel from "./MenuLabel";

type Props = {
    children: React.ReactNode;
    label: React.ReactNode;
    data?: MenuSchemaType;
    onChange?: (item: MenuItemType) => void;
    position?: MenuPositionType;
};

const Menu: React.FC<Props> = ({
    label,
    data,
    onChange = () => {},
    position = "bottom-right",
    children,
}) => {
    const menuRef = useRef<HTMLDivElement>(null);
    return (
        <MenuProvider
            position={position}
            menuRef={menuRef}
            data={data}
            onChange={onChange}
        >
            <div ref={menuRef} className="relative">
                <MenuLabel>{label}</MenuLabel>
                {children}
            </div>
        </MenuProvider>
    );
};

export default Menu;
