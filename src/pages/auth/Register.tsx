import React from "react";

import {
    ButtonLoginWithFacebook,
    ButtonLoginWithGoogle,
} from "../../components/buttons";
import RegisterForm from "../../components/forms/RegisterForm";

type Props = {};

const Register: React.FC<Props> = ({}) => {
    return (
        <>
            <div>
                <div className="w-full">
                    <h2 className="w-full text-center text-3xl text-slate-500 font-semibold">
                        Đăng ký
                    </h2>
                    <p className="my-3 text-sm font-medium text-slate-400 text-center">
                        Tạo tài khoản và kết nối với mọi người
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
                    <RegisterForm></RegisterForm>
                </div>
            </div>
        </>
    );
};

export default Register;
