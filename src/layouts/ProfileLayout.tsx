import { Outlet } from "react-router-dom";
import ProfileAvatar from "../components/profile/ProfileAvatar";
import ProfileBackground from "../components/profile/ProfileBackground";
import ProfileAction from "../components/profile/ProfileAction";
import ProfileNav from "../components/profile/ProfileNav";
import ProfileUsername from "../components/profile/ProfileUsername";
import MainLayout from "./MainLayout";

type Props = {
    sidebarLeft?: boolean;
    sidebarRight?: boolean;
};

const ProfileLayout = (props: Props) => {
    return (
        <MainLayout {...props}>
            <div>
                <ProfileBackground></ProfileBackground>
                <div className="-mt-28 flex justify-between items-end">
                    <div className="flex justify-start items-end gap-6">
                        <ProfileAvatar size={200}></ProfileAvatar>
                        <ProfileUsername></ProfileUsername>
                    </div>
                    <ProfileAction></ProfileAction>
                </div>
                <ProfileNav></ProfileNav>
                <Outlet></Outlet>
            </div>
        </MainLayout>
    );
};

export default ProfileLayout;
