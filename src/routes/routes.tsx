import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ChatsLayout from "../layouts/ChatsLayout";
import GlobalSettingLayout from "../layouts/GlobalSettingLayout.tsx";
import LayoutWrapper from "../layouts/LayoutWrapper.tsx";
import MainLayout from "../layouts/MainLayout";
import ProfileAboutLayout from "../layouts/ProfileAboutLayout.tsx";
import ProfileLayout from "../layouts/ProfileLayout.tsx";
import ProfileSettingLayout from "../layouts/ProfileSettingLayout.tsx";
import SettingLayout from "../layouts/SettingLayout.tsx";
import Chats from "../pages/Chats";
import Discover from "../pages/Discover";
import Friends from "../pages/Friends";
import Home from "../pages/Home";
import News from "../pages/News";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SendVerifyEmail from "../pages/auth/SendVerifyEmail.tsx";
import VerifyEmail from "../pages/auth/VerifyEmail.tsx";
import NewUser from "../pages/auth/newUser/NewUser.tsx";
import Profile from "../pages/profile/Profile.tsx";
import ProfileFriends from "../pages/profile/ProfileFriends.tsx";
import ProfilePhoto from "../pages/profile/ProfilePhoto.tsx";
import ProfileAboutContactAndBasicInfo from "../pages/profile/about/ProfileAboutContactAndBasicInfo.tsx";
import ProfileAboutDetails from "../pages/profile/about/ProfileAboutDetails.tsx";
import ProfileAboutEducation from "../pages/profile/about/ProfileAboutEducation.tsx";
import ProfileAboutOverview from "../pages/profile/about/ProfileAboutOverview.tsx";
import ProfileAboutPlaces from "../pages/profile/about/ProfileAboutPlaces.tsx";
import ProfileInfomation from "../pages/settings/profile/ProfileInfomation.tsx";
import ProfileOverview from "../pages/settings/profile/ProfileOverview.tsx";
import ProfilePrivacy from "../pages/settings/profile/ProfilePrivacy.tsx";
import GeneralSetting from "../pages/settings/GeneralSetting.tsx";
import AccountSetting from "../pages/settings/AccountSetting.tsx";
import LanguageAndRegionSetting from "../pages/settings/profile/LanguageAndRegionSetting.tsx";
import NotificationSetting from "../pages/settings/profile/NotificationSetting.tsx";

// type PrivateRouteProps = {
//     children: React.ReactNode;
// };

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//     const [allow, setAllow] = useState<boolean>(false);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         (async () => {
//             const token = Cookies.get("refresh_token");
//             if (!token) return;
//             const userStorage = localStorage.getItem("user");

//             if (userStorage) {
//                 dispatch(setInfo(JSON.parse(userStorage)));
//                 setAllow(true);
//             } else {
//                 // get user info here
//             }
//         })();
//     }, []);

//     if (!allow) return <NoLogin/>;
//     return children;
// };

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWrapper />,
        children: [
            {
                path: "/",
                element: (
                    <MainLayout sidebarLeft sidebarRight>
                        <Home />
                    </MainLayout>
                ),
            },
            {
                path: "friends",
                element: (
                    <MainLayout sidebarLeft sidebarRight>
                        <Friends />
                    </MainLayout>
                    // <PrivateRoute>
                    // </PrivateRoute>
                ),
            },
            {
                path: "discover",
                element: (
                    <MainLayout sidebarLeft>
                        <Discover />
                    </MainLayout>
                ),
            },
            {
                path: "news",
                element: (
                    <MainLayout sidebarLeft>
                        <News />
                    </MainLayout>
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "send-verify-email",
                element: <SendVerifyEmail />,
            },
            {
                path: "verify-email",
                element: <VerifyEmail />,
            },
        ],
    },
    {
        element: <ChatsLayout />,
        children: [
            {
                path: "/chats",
                element: (
                    // <PrivateRoute>
                    <Chats />
                    // </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "new-user",
        element: <NewUser />,
    },
    {
        path: "/settings",
        element: <SettingLayout />,
        children: [
            {
                path: "profile/:id",
                element: <ProfileSettingLayout />,
                children: [
                    {
                        path: "overview",
                        element: <ProfileOverview />,
                    },
                    {
                        path: "infomation",
                        element: <ProfileInfomation />,
                    },
                    {
                        path: "privacy",
                        element: <ProfilePrivacy />,
                    },
                ],
            },
            {
                path: ":id",
                element: <GlobalSettingLayout />,
                children: [
                    {
                        path: "general",
                        element: <GeneralSetting />,
                    },
                    {
                        path: "accounts",
                        element: <AccountSetting />,
                    },
                    {
                        path: "notifications",
                        element: <NotificationSetting />,
                    },
                    {
                        path: "language_and_region",
                        element: <LanguageAndRegionSetting />,
                    },
                ],
            },
        ],
    },
    {
        path: "/profile",
        element: <ProfileLayout sidebarLeft />,

        children: [
            {
                path: ":id",
                element: <Profile />,
            },
            {
                path: ":id/about",
                element: <ProfileAboutLayout />,
                children: [
                    {
                        path: "overview",
                        element: <ProfileAboutOverview />,
                    },
                    {
                        path: "education",
                        element: <ProfileAboutEducation />,
                    },
                    {
                        path: "places",
                        element: <ProfileAboutPlaces />,
                    },
                    {
                        path: "contact_and_basic_info",
                        element: <ProfileAboutContactAndBasicInfo />,
                    },
                    {
                        path: "details",
                        element: <ProfileAboutDetails />,
                    },
                ],
            },
            {
                path: ":id/friends",
                element: <ProfileFriends />,
            },
            {
                path: ":id/photos",
                element: <ProfilePhoto />,
            },
        ],
    },
]);

export default router;
