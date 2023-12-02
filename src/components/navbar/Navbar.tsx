import React, { useEffect } from "react";
import { BiHomeAlt2, BiNews } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import useWindowSize from "../../hooks/useWindowSize";
import { changeNavbarType, closeNavbar } from "../../redux/fetures/app.slice";
import { RootState } from "../../redux/store";
import { NavbarItemType } from "../../common/types/navbar.type";
import { ButtonControlNavbar } from "../buttons";
import Logo from "../logo/Logo";
import NavbarItem from "./NavbarItem";
import Avatar from "../avatar/Avatar";

const navbarItems: NavbarItemType[] = [
    {
        label: "Trang chủ",
        to: "/",
        icon: <BiHomeAlt2 />,
    },
    {
        label: "Bạn bè",
        to: "/friends",
        icon: <FiUsers />,
    },
    {
        label: "Trò chuyện",
        to: "/chats",
        icon: <BsChatText />,
    },
    {
        label: "Khám phá",
        to: "/discover",
        icon: <RiCompassDiscoverLine />,
    },
    {
        label: "tin tức",
        to: "/news",
        icon: <BiNews />,
    },
];

type Props = { showAvatar?: boolean };

const Navbar: React.FC<Props> = ({ showAvatar = false }) => {
    const { navbarType, showNavBar } = useSelector(
        (state: RootState) => state.app
    );
    const { width: windowWidth } = useWindowSize();
    const windowWidthDebounce = useDebounce(windowWidth, 800);
    const dispatch = useDispatch();

    useEffect(() => {
        if (windowWidthDebounce < 680) {
            dispatch(changeNavbarType("absolute"));
        } else dispatch(changeNavbarType("static"));
    }, [windowWidthDebounce, dispatch]);

    if (navbarType === "absolute" && !showNavBar) return <></>;

    return (
        <>
            <div
                className={`${
                    showAvatar ? "h-full" : "app-body-sticky"
                } bg-white px-5 bg-opacity-90 backdrop-blur
            ${
                navbarType === "absolute" && showNavBar
                    ? "!fixed !top-0 !left-0 !z-40 !h-screen"
                    : ""
            }
        `}
            >
                {navbarType === "absolute" && showNavBar && (
                    <div className="py-5 flex justify-start items-center gap-5 ">
                        <ButtonControlNavbar></ButtonControlNavbar>
                        <Logo></Logo>
                    </div>
                )}
                <ul className="w-min h-full flex flex-col justify-start items-start  gap-1 py-5">
                    {showAvatar && (
                        <Avatar
                            src="/avatar.png"
                            size={56}
                            className="cursor-pointer"
                        />
                    )}
                    {navbarItems.map((item, index) => {
                        return <NavbarItem key={index} {...item}></NavbarItem>;
                    })}
                </ul>
            </div>
            {navbarType === "absolute" && showNavBar && (
                <div
                    onClick={() => dispatch(closeNavbar())}
                    className="fixed top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-25  z-30"
                ></div>
            )}
        </>
    );
};

export default Navbar;
