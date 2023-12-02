import { Outlet } from "react-router-dom";
import ProfileAboutNav from "../components/profile/profileAbout/ProfileAboutNav";
import Card from "../components/cards/Cards";

const ProfileAboutLayout = () => {
    return (
        <Card wrapperClassName="flex justify-start items-start gap-5 min-h-[300px]">
            <ProfileAboutNav></ProfileAboutNav>
            <Outlet></Outlet>
        </Card>
    );
};

export default ProfileAboutLayout;
