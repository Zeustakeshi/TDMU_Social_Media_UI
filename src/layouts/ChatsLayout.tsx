import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import CallingHeader from "../components/header/CallingHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CallState } from "../common/enums/call.enum";

type Props = {};

const ChatsLayout: React.FC<Props> = ({}) => {
    const { callState } = useSelector((state: RootState) => state.chat);
    return (
        <div className="bg-white h-screen">
            {/* <Header></Header> */}
            {callState === CallState.ON_CALLING && (
                <CallingHeader className=" top-0"></CallingHeader>
            )}
            <div className="flex justify-center items-start px-4 py-2 w-full h-full ">
                <Navbar showAvatar></Navbar>
                <div className="max-h-full h-full flex-1 p-5 rounded-2xl bg-slate-50">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ChatsLayout;
