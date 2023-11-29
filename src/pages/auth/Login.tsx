import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import {
    ButtonLoginWithFacebook,
    ButtonLoginWithGoogle,
} from "../../components/buttons";

type Props = {};

const Login: React.FC<Props> = ({}) => {
    return (
        <div>
            <div className="w-full">
                <h2 className="w-full text-center text-3xl text-slate-500 font-semibold">
                    Đăng Nhập
                </h2>
                <p className="my-3 text-sm font-medium text-slate-400 text-center">
                    Chào mừng quay lại, Đăng nhập để tận hưởng cùng mọi người
                </p>
            </div>
            <div className="mt-6">
                <div className="flex justify-center items-center gap-2 my-5">
                    <ButtonLoginWithGoogle></ButtonLoginWithGoogle>
                    <ButtonLoginWithFacebook></ButtonLoginWithFacebook>
                </div>
                <div className="my-5 flex justify-center items-center gap-4 text-slate-400 font-semibold">
                    <span className="bg-slate-200 flex-1 h-[2px]"></span>
                    <span>Hoặc</span>
                    <span className="bg-slate-200 flex-1 h-[2px]"></span>
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Login;
