import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ButtonChat, ButtonControlNavbar, ButtonNotify } from "../buttons";
import ButtonLogin from "../buttons/ButtonLogin";
import Logo from "../logo/Logo";
import Search from "../searchs/Search";
import HeaderAccountActions from "./HeaderAccountActions";

type Props = {
    showControlNavbar?: boolean;
};

const Header: React.FC<Props> = ({ showControlNavbar }) => {
    const { info: user } = useSelector((state: RootState) => state.user);

    return (
        <header
            className={`px-10 py-2 sticky top-0 bg-white bg-opacity-90 backdrop-blur z-40 flex justify-between items-center`}
        >
            <div className="flex justify-start items-center gap-5">
                {showControlNavbar && (
                    <ButtonControlNavbar></ButtonControlNavbar>
                )}
                <div className="hidden sm:inline-block">
                    <Logo></Logo>
                </div>
            </div>
            <Search></Search>
            <div className="flex justify-end items-center gap-5">
                <ButtonNotify></ButtonNotify>

                <ButtonChat></ButtonChat>
                {user ? <HeaderAccountActions /> : <ButtonLogin />}
            </div>
        </header>
    );
};

export default Header;
