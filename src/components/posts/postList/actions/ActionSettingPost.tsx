import React from "react";
import { BsBell } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { RiUserUnfollowLine } from "react-icons/ri";
import { TfiMore } from "react-icons/tfi";
import Card from "../../../cards/Cards";
import Menu from "../../../menu/Menu";
import MenuContentWrapper from "../../../menu/MenuContentWrapper";

type Props = {};

const ActionSettingPost: React.FC<Props> = ({}) => {
    return (
        <Menu
            position="bottom"
            label={
                <button className="p-2 rounded-full hover:bg-slate-100">
                    <TfiMore></TfiMore>
                </button>
            }
        >
            <MenuContentWrapper className="w-max -translate-x-[50%] top-[110%]">
                <MenuContent></MenuContent>
            </MenuContentWrapper>
        </Menu>
    );
};

const MenuContent = () => {
    return (
        <Card wrapperClassName="p-0" className="overflow-hidden shadow-style-1">
            <MenuItem title="Ẩn bài này" icon={<FiEyeOff />}></MenuItem>
            <MenuItem
                title="Nhận thông báo cho bài này"
                icon={<BsBell />}
            ></MenuItem>
            <MenuItem title="Báo cáo" icon={<GoReport />}></MenuItem>
            <MenuItem
                title="Hủy theo dõi"
                icon={<RiUserUnfollowLine />}
            ></MenuItem>
        </Card>
    );
};

type MenuItemProps = {
    title: string;
    icon: React.ReactNode;
};
const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
    return (
        <div className="hover:bg-slate-100 px-5 py-3 cursor-pointer flex justify-start items-center gap-3">
            {icon}
            {title}
        </div>
    );
};

export default ActionSettingPost;
