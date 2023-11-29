import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Logo: React.FC<Props> = ({}) => {
    return (
        <NavLink
            to="/"
            className="text-primary font-semibold text-2xl inline-block p-3"
        >
            <div className="w-[100px] h-[40px]">
                <img
                    src="/logo_TDMU.png"
                    alt="logo_tdmu"
                    className="object-cover w-full h-full"
                />
            </div>
            {/* TDMU */}
        </NavLink>
    );
};

export default Logo;
