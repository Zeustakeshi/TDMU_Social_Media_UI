import Cookies from "js-cookie";
import api from "./api";
import mem from "mem";
import { UserType } from "../common/types/user.type";

const logoutUser = () => {
    localStorage.removeItem("user");
    Cookies.remove("refresh_token");
};

const refreshToken = async () => {
    const refreshToken = Cookies.get("refresh_token");
    const userStorage = localStorage.getItem("user");
    if (!userStorage) return;
    const user = JSON.parse(userStorage) as UserType;
    if (!refreshToken || !user.id) {
        localStorage.removeItem("user");
        return;
    }
    try {
        const res = await api({
            method: "POST",
            url: "/auth/refresh-token",
            data: {
                userId: user.id,
                refreshToken: refreshToken,
            },
        });

        const data = res.data?.body?.data;
        if (!data?.value || !data?.expiresIn) logoutUser();

        Cookies.set("access_token", data.value, {
            expires: new Date(data.expiresIn),
        });

        return data.value;
    } catch (error) {
        logoutUser();
    }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshToken, {
    maxAge,
});
