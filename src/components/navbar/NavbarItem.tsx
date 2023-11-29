import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NavLink } from "react-router-dom";

export type NavbarItemType = {
    icon: React.ReactNode;
    label: string;
    to: string;
};

const NavbarItem: React.FC<NavbarItemType> = ({ label, to, icon }) => {
    const { navbarType, showNavBar } = useSelector(
        (state: RootState) => state.app
    );

    return (
        <NavLink
            className={({ isActive }) =>
                `${
                    isActive
                        ? "bg-primary shadow shadow-primary text-white"
                        : ""
                } flex justify-start items-center gap-5 w-full px-5 py-3 rounded-md hover:bg-primary hover:shadow hover:shadow-primary hover:text-white text-sm font-semibold transition-al`
            }
            to={to}
        >
            <span className="text-lg">{icon}</span>
            {(navbarType === "absolute" ||
                (navbarType === "static" && showNavBar)) && (
                <span className="flex-1 min-w-[190px]">{label}</span>
            )}
        </NavLink>
    );
};

export default NavbarItem;
