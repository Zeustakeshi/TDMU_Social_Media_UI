import React from "react";
import Menu from "../menu/Menu";
import MenuContentWrapper from "../menu/MenuContentWrapper";
import Card from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { removeUserStorage } from "../../redux/fetures/user.slice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { RootState } from "../../redux/store";

type Props = {};

const HeaderAccountActions: React.FC<Props> = ({}) => {
    return (
        <Menu
            position="bottom-left"
            label={
                <Avatar
                    src="/avatar.png"
                    sizes="56"
                    className="cursor-pointer"
                />
            }
        >
            <MenuContentWrapper className="w-max -translate-x-[80%] top-[120%]">
                <MenuContent></MenuContent>
            </MenuContentWrapper>
        </Menu>
    );
};

const MenuContent = () => {
    const { info } = useSelector((state: RootState) => state.user);
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
                title="Trang cá nhân"
                onClick={() => navigation(`/profile/${info?.id}`)}
            ></MenuItem>
            <MenuItem
                icon=""
                title="Cài đặt"
                onClick={() => navigation(`/settings/${info?.id}/general`)}
            ></MenuItem>
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
            className="hover:bg-slate-200 rounded-md px-5 py-3 min-w-[300px] cursor-pointer flex justify-start items-center gap-3"
        >
            {icon}
            {title}
        </div>
    );
};

export default HeaderAccountActions;
