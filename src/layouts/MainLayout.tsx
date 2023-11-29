import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CallState } from "../common/enums/call.enum";
import CallingHeader from "../components/header/CallingHeader";
import Header from "../components/header/Header";
import SidebarLeft from "../components/sidebar/SidebarLeft";
import SidebarRight from "../components/sidebar/SidebarRight";
import { setInfo } from "../redux/fetures/user.slice";
import { RootState } from "../redux/store";
import api from "../configs/api";

type Props = {
    sidebarLeft?: boolean;
    sidebarRight?: boolean;
    children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({
    sidebarLeft,
    sidebarRight,
    children,
}) => {
    const { deviceType } = useSelector((state: RootState) => state.app);
    const { callState } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const token = Cookies.get("refresh_token");
            if (!token) return;
            const userStorage = localStorage.getItem("user");

            if (userStorage) {
                dispatch(setInfo(JSON.parse(userStorage)));
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await api({
                    method: "GET",
                    url: "/user/hello",
                });
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="bg-white">
            <Header></Header>
            {callState === CallState.ON_CALLING && (
                <CallingHeader className=" top-[72px]"></CallingHeader>
            )}
            <div className="flex justify-center items-start px-4 w-full h-full">
                {sidebarLeft && <SidebarLeft></SidebarLeft>}
                <div className="app-body-height flex-1 p-5 rounded-2xl bg-slate-50">
                    {children}
                </div>
                {sidebarRight && deviceType === "desktop" && (
                    <SidebarRight></SidebarRight>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
