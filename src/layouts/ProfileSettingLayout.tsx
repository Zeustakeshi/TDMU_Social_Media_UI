import { Outlet, useParams } from "react-router-dom";
import Card from "../components/cards/Cards";
import SettingNav, { SettingRoute } from "../components/settings/SettingNav";
import { useMemo } from "react";

const ProfileSettingLayout = () => {
    const { id } = useParams();
    const routes: SettingRoute[] = useMemo(
        () => [
            {
                label: "Cài đặt tổng quan",
                to: `/settings/profile/${id}/overview`,
            },
            {
                label: "Thông tin cá nhân",
                to: `/settings/profile/${id}/infomation`,
            },
            {
                label: "Quyền riêng tư",
                to: `/settings/profile/${id}/privacy`,
            },
        ],
        []
    );
    return (
        <Card
            className="w-full min-h-[800px]"
            wrapperClassName="min-h-full min-h-[800px] flex justify-start items-start gap-2"
        >
            <SettingNav routes={routes}></SettingNav>
            <Outlet></Outlet>
        </Card>
    );
};

export default ProfileSettingLayout;
