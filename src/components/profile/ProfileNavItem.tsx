import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
    label: string;
    to: string;
};

const ProfileNavItem = (props: Props) => {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) => {
                const activeClassName =
                    "text-primary border-b-[2px] border-primary";
                const className =
                    "text-slate-500 hover:bg-slate-200 rounded-md";
                return ` px-5 py-3  font-semibold ${
                    isActive ? activeClassName : className
                }`;
            }}
        >
            {props.label}
        </NavLink>
    );
};

export default ProfileNavItem;
