import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ButtonNormal } from "../../components/buttons";
import { saveUserToStorage, setInfo } from "../../redux/fetures/user.slice";
import api from "../../configs/api";

type Props = {};

const VerifyEmail: React.FC<Props> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const handleVerifyEmailToken = async () => {
        const userId = queryParameters.get("userId");
        const token = queryParameters.get("token");

        if (!userId || !token) return;

        await toast.promise(
            async () => {
                setIsLoading(true);
                const res = await api({
                    method: "GET",
                    url: "/auth/verify-email",
                    params: {
                        userId,
                        token,
                    },
                });
                const responseData = res?.data?.body?.data;
                const accessToken = responseData.tokens?.accessToken;
                const refreshToken = responseData.tokens?.refreshToken;
                Cookies.set("access_token", accessToken.value, {
                    expires: new Date(accessToken.expiresIn),
                });
                Cookies.set("refresh_token", refreshToken.value, {
                    expires: new Date(refreshToken.expiresIn),
                });

                dispatch(saveUserToStorage(responseData.user));
                dispatch(setInfo(responseData.user));

                navigation("/");
            },
            {
                error: {
                    render: ({ data }) => {
                        const error = data as any;
                        const mess = error?.response?.data?.body?.error;
                        return mess || "Đã có lỗi xảy ra vui lòng thử lại sau";
                    },
                },
                pending: "Vui lòng chờ....",
                success: "Xác thực thành công",
            }
        );
        setIsLoading(false);
    };

    return (
        <div className="min-w-[600px] min-h-[500px] flex flex-col justify-center items-center gap-6 p-10">
            <h1 className="text-4xl font-semibold text-primary">
                Xác minh email của bạn
            </h1>
            <div className="w-[50%]">
                <img
                    src="/assets/email_verify.gif"
                    alt="email_verify.gif"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-center text-slate-600 font-semibold">
                Cảm ơn bạn đã đăng kí hệ thống Toomeet, vui lòng xác minh email
                của bạn để có được trải nghiệm tốt nhất trên hệ thống chúng tôi.
            </h2>

            <ButtonNormal
                onClick={handleVerifyEmailToken}
                disabled={isLoading}
                className={`px-5 py-4 rounded-md bg-primary text-white font-semibold ${
                    isLoading && "pointer-events-none"
                }`}
            >
                Xác minh ngay
            </ButtonNormal>
        </div>
    );
};

export default VerifyEmail;
