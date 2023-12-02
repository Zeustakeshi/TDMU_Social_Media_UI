import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    children: ReactNode;
    to: string;
};

const SettingInputGroupItem: React.FC<Props> = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                const activeClassName = "px-4 py-2 bg-primary text-white";
                const className = "text-slate-500 hover:bg-slate-200 ";
                return `w-full block px-5 py-3  font-semibold rounded-md ${
                    isActive ? activeClassName : className
                }`;
            }}
        >
            {children}
        </NavLink>
    );
};

export default SettingInputGroupItem;
