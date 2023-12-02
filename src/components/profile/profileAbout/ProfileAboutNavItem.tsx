import React, { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = {
    children: ReactNode;
} & NavLinkProps;

const ProfileAboutNavItem: React.FC<Props> = ({ children, ...props }) => {
    return (
        <NavLink
            className={({ isActive }) => {
                const activeClassName = "px-4 py-2 bg-primary text-white";
                const className = "text-slate-500 hover:bg-slate-200 ";
                return ` px-5 py-3  font-semibold rounded-md ${
                    isActive ? activeClassName : className
                }`;
            }}
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default ProfileAboutNavItem;
