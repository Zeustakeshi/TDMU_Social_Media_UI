import React from "react";
import Logo from "../logo/Logo";

type Props = {};

const AuthHeader: React.FC<Props> = ({}) => {
    return (
        <header className="px-5 py-2 sticky top-0  bg-white bg-opacity-90 backdrop-blur z-40">
            <Logo></Logo>
        </header>
    );
};

export default AuthHeader;
