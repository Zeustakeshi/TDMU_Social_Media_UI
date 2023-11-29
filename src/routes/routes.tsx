import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ChatsLayout from "../layouts/ChatsLayout";
import MainLayout from "../layouts/MainLayout";
import Chats from "../pages/Chats";
import Discover from "../pages/Discover";
import Friends from "../pages/Friends";
import Home from "../pages/Home";
import News from "../pages/News";
import NoLogin from "../pages/NoLogin.tsx";
import Login from "../pages/auth/Login";
import NewUser from "../pages/auth/newUser/NewUser.tsx";
import Register from "../pages/auth/Register";
import SendVerifyEmail from "../pages/auth/SendVerifyEmail.tsx";
import VerifyEmail from "../pages/auth/VerifyEmail.tsx";
import { setInfo } from "../redux/fetures/user.slice.ts";
import Profile from "../pages/profile/Profile.tsx";
import LayoutWrapper from "../layouts/LayoutWrapper.tsx";
import ProfileLayout from "../layouts/ProfileLayout.tsx";
import ProfileAbout from "../pages/profile/ProfileAbout.tsx";
import ProfileFriends from "../pages/profile/ProfileFriends.tsx";
import ProfilePhoto from "../pages/profile/ProfilePhoto.tsx";

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const [allow, setAllow] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const token = Cookies.get("refresh_token");
            if (!token) return;
            const userStorage = localStorage.getItem("user");

            if (userStorage) {
                dispatch(setInfo(JSON.parse(userStorage)));
                setAllow(true);
            } else {
                // get user info here
            }
        })();
    }, []);

    if (!allow) return <NoLogin></NoLogin>;
    return children;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWrapper></LayoutWrapper>,
        children: [
            {
                path: "/",
                element: (
                    <MainLayout sidebarLeft sidebarRight>
                        <Home></Home>
                    </MainLayout>
                ),
            },
            {
                path: "friends",
                element: (
                    <MainLayout sidebarLeft sidebarRight>
                        <Friends></Friends>
                    </MainLayout>
                    // <PrivateRoute>
                    // </PrivateRoute>
                ),
            },
            {
                path: "discover",
                element: (
                    <MainLayout sidebarLeft>
                        <Discover></Discover>
                    </MainLayout>
                ),
            },
            {
                path: "news",
                element: (
                    <MainLayout sidebarLeft>
                        <News></News>
                    </MainLayout>
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "send-verify-email",
                element: <SendVerifyEmail></SendVerifyEmail>,
            },
            {
                path: "verify-email",
                element: <VerifyEmail></VerifyEmail>,
            },
        ],
    },
    {
        element: <ChatsLayout></ChatsLayout>,
        children: [
            {
                path: "/chats",
                element: (
                    // <PrivateRoute>
                    <Chats></Chats>
                    // </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "new-user",
        element: <NewUser></NewUser>,
    },
    {
        path: "/profile",
        element: <ProfileLayout></ProfileLayout>,
        children: [
            {
                path: ":id",
                element: <Profile></Profile>,
            },
            {
                path: ":id/about",
                element: <ProfileAbout></ProfileAbout>,
            },
            {
                path: ":id/friends",
                element: <ProfileFriends></ProfileFriends>,
            },
            {
                path: ":id/photos",
                element: <ProfilePhoto></ProfilePhoto>,
            },
        ],
    },
]);

export default router;
