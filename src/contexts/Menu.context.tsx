import React, { useContext, useState } from "react";
import {
    MenuItemType,
    MenuPositionType,
    MenuSchemaType,
} from "../common/types/menu.type";

type MenuProviderProps = {
    menuRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    data?: MenuSchemaType;
    onChange: (item: MenuItemType) => void;
    position: MenuPositionType;
};

type IMenuContext = {
    menuRef: React.RefObject<HTMLDivElement>;
    data?: MenuSchemaType;
    show: boolean;
    history: MenuSchemaType[];
    position: MenuPositionType;
    onChange: (item: MenuItemType) => void;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setHistory: React.Dispatch<React.SetStateAction<MenuSchemaType[]>>;
};

const MenuContext = React.createContext<IMenuContext | null>(null);

const MenuProvider: React.FC<MenuProviderProps> = ({
    menuRef,
    children,
    data,
    onChange,
    position,
}) => {
    const [show, setShow] = useState(false);
    const [history, setHistory] = useState<MenuSchemaType[]>(() =>
        data ? [data] : []
    );

    const values = {
        menuRef,
        data,
        show,
        history,
        position,
        setShow,
        setHistory,
        onChange,
    };

    return (
        <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
    );
};

const useMenu = () => {
    const context = useContext(MenuContext);
    if (typeof context === "undefined" || !context) {
        throw new Error("useMenu must be used within MenuProvider");
    }
    return context;
};

export { useMenu, MenuProvider };
