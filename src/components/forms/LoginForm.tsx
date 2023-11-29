import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import "dayjs/locale/en-gb";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../../configs/api";
import { saveUserToStorage, setInfo } from "../../redux/fetures/user.slice";
import { ButtonNormal } from "../buttons";
import { InputPassword } from "../inputs";

type Props = {};

type LoginField = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email của bạn không hợp lệ!")
        .matches(
            /^[a-z0-9](\.?[a-z0-9]){0,}@student\.tdmu\.edu\.vn$/,
            "Chúng tôi chỉ chấp nhận email của TDMU"
        )
        .required("Email là trường bắt buộc"),
    password: yup
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 chữ số")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Mật khẩu phải chứa ít nhất 1 kí tự viết hoa, 1 kí tự viết thường và 1 kí tự đặc biệt"
        )
        .required("Mật khẩu là trường bắt buộc"),
});

const LoginForm: React.FC<Props> = ({}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginField>({
        resolver: yupResolver(schema),
    });

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<LoginField> = async (data) => {
        await toast.promise(
            async () => {
                setLoading(true);
                const res = await api({
                    url: "/auth/login",
                    method: "POST",
                    data: data,
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
                setLoading(false);
            },
            {
                pending: "Đang xử lí",
                error: {
                    render({ data }) {
                        const error = data as any;
                        const mess = error?.response?.data?.mess;
                        setLoading(false);
                        return (
                            mess ||
                            "Đã có lỗi xảy ra trong quá trình tải lên, vui lòng thử lại sau!"
                        );
                    },
                },
                success: "Đăng nhập thành công",
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-start items-start flex-col gap-5"
        >
            {/* Email */}
            <TextField
                required
                error={!!errors.email}
                helperText={errors.email?.message}
                className="w-full"
                placeholder="nguyena@student.tdmu.edu.vn"
                label="Email"
                autoComplete="off"
                {...register("email")}
            />

            {/* Password */}
            <InputPassword
                required
                error={!!errors.password}
                helperText={errors.password?.message}
                className="w-full"
                label="Mật khẩu"
                {...register("password")}
            />
            <ButtonNormal
                disabled={loading}
                className={`bg-primary w-full py-3 px-5 rounded-md text-white font-semibold ${
                    loading && "pointer-events-none"
                }`}
            >
                Đăng Nhập
            </ButtonNormal>
            <div className="my-3 w-full flex justify-center items-center sm:gap-2 gap-1 text-xs">
                <span className="text-slate-500">Bạn là người mới?</span>
                <NavLink
                    to="/auth/register"
                    className="text-primary font-semibold text-sm md:text-base"
                >
                    Tạo tài khoản
                </NavLink>
            </div>
        </form>
    );
};

export default LoginForm;
