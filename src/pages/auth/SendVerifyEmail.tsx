import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../configs/api";

const SendVerifyEmail = () => {
    const [userId, setUserId] = useState<String>();
    const [email, setEmail] = useState<String>();
    const [isSendedEmail, setIsSendedEmail] = useState<boolean>(false);
    const { state } = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        if (!state || !state.userId || !state.email) navigation("/auth/login");
        setUserId(state?.userId);
        setEmail(state?.email);
    }, [state]);

    useEffect(() => {
        const token = Cookies.get("refresh_token");
        const user = localStorage.getItem("user");
        if (token && user) navigation("/");
    }, [localStorage.getItem("user")]);

    const handleSendEmail = async () => {
        await toast.promise(
            async () => {
                try {
                    await api({
                        method: "POST",
                        url: "/auth/send-verify-email",
                        data: {
                            userId,
                        },
                    });
                    setIsSendedEmail(true);
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: "Đang xử lí ....",
                success: "Gửi thành công.",
                error: "Đã có lỗi sảy ra vui lòng thử lại.",
            }
        );
    };

    return (
        <div className="min-w-[600px] min-h-[500px] flex flex-col justify-center items-center gap-6">
            <div className="w-[250px] h-[200px]">
                <img
                    src="/assets/email-file.gif"
                    alt="email-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-2xl text-primary font-semibold text-center">
                Vui lòng xác thực email của bạn!
            </h2>
            {!isSendedEmail && (
                <>
                    <p className="text-lg font-medium text-slate-400 mb-4">
                        Cảm ơn bạn đã đăng ký. Vui lòng xác thực email của bạn
                    </p>
                    <button
                        onClick={handleSendEmail}
                        className="px-5 py-3 rounded-md bg-primary text-white font-semibold hover:bg-opacity-80 transition-all"
                    >
                        Gửi email xác thực
                    </button>
                </>
            )}
            {isSendedEmail && (
                <p className="text-base font-medium text-center text-slate-600">
                    Vui lòng kiểm tra hộp thư đến và làm theo các hướng dẫn.
                    Email đã được gửi đến
                    <a className="text-primary font-semibold" href="">
                        {email}
                    </a>{" "}
                </p>
            )}
        </div>
    );
};

export default SendVerifyEmail;
