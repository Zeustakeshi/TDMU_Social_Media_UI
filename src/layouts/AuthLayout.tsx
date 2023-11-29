import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "../components/header/AuthHeader";

type Props = {};

const AuthLayout: React.FC<Props> = ({}) => {
    const [user] = useState(() => localStorage.getItem("user"));
    const navigation = useNavigate();
    useEffect(() => {
        if (user) navigation("/");
    }, [user]);

    return (
        <div className=" relative bg-white bg-[url('/assets/auth_background.jpg')] ">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                newestOnTop={false}
                theme="light"
            />
            <div className="abs-center w-full h-full bg-gray-200 backdrop-blur-none bg-opacity-25 z-0"></div>
            <AuthHeader></AuthHeader>
            <div className="app-body-height flex justify-center items-center ">
                <div className="bg-white shadow-style-2 p-8 rounded-md max-w-[650px] z-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
