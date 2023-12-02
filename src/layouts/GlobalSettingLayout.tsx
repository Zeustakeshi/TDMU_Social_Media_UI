import Card from "../components/cards/Cards";

import { Outlet, useParams } from "react-router-dom";
import SettingNav, { SettingRoute } from "../components/settings/SettingNav";
import { useMemo } from "react";

const GlobalSettingLayout = () => {
    const { id } = useParams();

    const routes: SettingRoute[] = useMemo(
        () => [
            {
                label: "Cài đặt chung",
                to: `/settings/${id}/general`,
            },
            {
                label: "Tài khoản",
                to: `/settings/${id}/accounts`,
            },
            {
                label: "Thông báo",
                to: `/settings/${id}/notifications`,
            },
            {
                label: "Ngôn ngữ và khu vực",
                to: `/settings/${id}/language_and_region`,
            },
            {
                label: "Thông tin cá nhân",
                to: `/settings/profile/${id}/overview`,
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

export default GlobalSettingLayout;
