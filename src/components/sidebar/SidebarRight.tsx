import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";
import FriendList from "../friends/FriendList";

type Props = {};

const SidebarRight: React.FC<Props> = () => {
    const { info: user } = useSelector((state: RootState) => state.user);

    return (
        <div className="app-body-sticky">
            {user && <FriendList></FriendList>}
            <div className="p-2 h-full w-full flex justify-start items-center flex-col">
                <ExternalLink
                    title="Xem thêm thông tin về trường"
                    url="/"
                ></ExternalLink>
                <ExternalLink
                    title="Xem thông báo mới nhất từ trường"
                    url="/"
                ></ExternalLink>
                <ExternalLink
                    title="Các sự kiện sắp diễn ra trong trường"
                    url="/"
                ></ExternalLink>
            </div>
        </div>
    );
};

type ExternalLinkProps = {
    url: string;
    title: string;
};
const ExternalLink: React.FC<ExternalLinkProps> = ({ url, title }) => {
    return (
        <NavLink
            to={url}
            className="group p-5 w-full flex justify-start items-center gap-3  hover:shadow-lg transition-shadow rounded-md min-w-[200px]"
        >
            <div className="w-[30px] h-[30px] rounded-md overflow-hidden">
                <img
                    src="/assets/award.gif"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <p className=" text-slate-800 group-hover:text-primary group-hover:underline whitespace-nowrap overflow-ellipsis max-w-[200px] overflow-hidden">
                    {title}
                </p>
            </div>
        </NavLink>
    );
};

export default SidebarRight;
