import React from "react";
import MainLayout from "./MainLayout";
import ProfileBackground from "../components/profile/ProfileBackground";
import ProfileAvatar from "../components/profile/ProfileAvatar";
import ProfileDescription from "../components/profile/ProfileDescription";
import ProfileUsername from "../components/profile/ProfileUsername";
import ProfileFollowAction from "../components/profile/ProfileFollowAction";
import ProfileNav from "../components/profile/ProfileNav";
import { Outlet } from "react-router-dom";
import Card from "../components/cards/Cards";

type Props = {};

const ProfileLayout = (props: Props) => {
    return (
        <MainLayout sidebarLeft>
            <div>
                <div className="relative">
                    <ProfileBackground></ProfileBackground>
                    <ProfileAvatar></ProfileAvatar>
                </div>
                <Card
                    className="mt-10 w-full "
                    wrapperClassName="flex justify-between items-start"
                >
                    <div className="flex-1 max-w-[80%]">
                        <ProfileUsername></ProfileUsername>
                        <ProfileDescription></ProfileDescription>
                    </div>
                    <ProfileFollowAction></ProfileFollowAction>
                </Card>
                <ProfileNav></ProfileNav>
                <Outlet></Outlet>
            </div>
        </MainLayout>
    );
};

export default ProfileLayout;
