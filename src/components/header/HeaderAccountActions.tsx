import { Avatar } from "@mui/material";
import React from "react";
import Menu from "../menu/Menu";
import MenuContentWrapper from "../menu/MenuContentWrapper";
import Card from "../cards/Cards";
import { useDispatch } from "react-redux";
import { removeUserStorage } from "../../redux/fetures/user.slice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

type Props = {};

const HeaderAccountActions: React.FC<Props> = ({}) => {
    return (
        <Menu
            position="bottom-left"
            label={
                <Avatar
                    alt="Remy Sharp"
                    src="/avatar.png"
                    sx={{ width: 56, height: 56 }}
                    className="cursor-pointer"
                />
            }
        >
            <MenuContentWrapper className="w-max -translate-x-[50%] top-[120%]">
                <MenuContent></MenuContent>
            </MenuContentWrapper>
        </Menu>
    );
};

const MenuContent = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleLogout = () => {
        dispatch(removeUserStorage());
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        navigation("/auth/login");
    };
    return (
        <Card wrapperClassName="p-0" className="overflow-hidden shadow-style-1">
            <MenuItem
                icon=""
                title="Đăng xuất"
                onClick={handleLogout}
            ></MenuItem>
        </Card>
    );
};

type MenuItemProps = {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
};
const MenuItem: React.FC<MenuItemProps> = ({
    title,
    icon,
    onClick = () => {},
}) => {
    return (
        <div
            onClick={onClick}
            className="hover:bg-slate-100 px-5 py-3 cursor-pointer flex justify-start items-center gap-3"
        >
            {icon}
            {title}
        </div>
    );
};

export default HeaderAccountActions;
