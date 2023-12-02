import React from "react";
import ProfileAboutNavItem from "./ProfileAboutNavItem";
import { useParams } from "react-router-dom";

type Props = {};

const ProfileAboutNav: React.FC<Props> = ({}) => {
    const { id } = useParams();
    return (
        <div className="w-[300px] min-w-[300px] min-h-[600px] border-r border-slate-300 flex flex-col gap-1 justify-start p-2">
            <ProfileAboutNavItem to={`/profile/${id}/about/overview`}>
                Tổng Quan
            </ProfileAboutNavItem>
            <ProfileAboutNavItem to={`/profile/${id}/about/education`}>
                Học vấn
            </ProfileAboutNavItem>
            <ProfileAboutNavItem to={`/profile/${id}/about/places`}>
                Nơi từng sống
            </ProfileAboutNavItem>
            <ProfileAboutNavItem
                to={`/profile/${id}/about/contact_and_basic_info`}
            >
                Liên hệ và thông tin cơ bản
            </ProfileAboutNavItem>
            <ProfileAboutNavItem to={`/profile/${id}/about/details`}>
                Chi tiết
            </ProfileAboutNavItem>
        </div>
    );
};

export default ProfileAboutNav;
