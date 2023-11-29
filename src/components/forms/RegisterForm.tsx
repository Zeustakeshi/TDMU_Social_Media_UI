import { yupResolver } from "@hookform/resolvers/yup";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en-gb";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../../configs/api";
import { ButtonNormal } from "../buttons";
import { InputPassword } from "../inputs";

const maxBirthday = dayjs().subtract(12, "years");
const minBirthday = dayjs().subtract(90, "years");

type Props = {};

type GenderType = "male" | "female";
type RegisterFields = {
    username: string;
    email: string;
    password: string;
    birthday: Dayjs;
    gender: GenderType;
};

const isAdult = (value: any) => {
    const currentDate = dayjs();
    const age = currentDate.diff(value, "year");
    return age >= 12;
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
    birthday: yup
        .mixed<Dayjs>()
        .test("is-adult", "Tuổi phải lớn hơn 12", isAdult)
        .required("Vui lòng cho biết ngày sinh của bạn"),
    username: yup
        .string()
        .required("Vui lòng cho biết tên của bạn")
        .min(5, "Tên phải có ít nhất 5 kí tự")
        .max(30, "Vui lòng lập tên ít hơn 30 kí tự"),
    gender: yup.string().oneOf(["male", "female"]).required(),
});

const RegisterForm: React.FC<Props> = ({}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterFields>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
        toast.promise(
            async () => {
                setLoading(true);
                const res = await api({
                    method: "POST",
                    url: `auth/register`,
                    data: {
                        ...data,
                        birthday: data.birthday.format("YYYY-MM-DD"),
                    },
                });

                const responseData = res.data?.body?.data;
                if (responseData && responseData.userId) {
                    navigation("/auth/send-verify-email", {
                        state: {
                            userId: responseData.userId,
                            email: data.email,
                        },
                    });
                }

                setLoading(false);
            },
            {
                pending: "Vui lòng chờ ...",
                success: "Tạo tài khoản thành công",
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
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                required
                {...register("email")}
                className="w-full"
                placeholder="nguyena@student.tdmu.edu.vn"
                label="Email"
                autoComplete="off"
            />
            {/* Username */}
            <TextField
                error={!!errors.username}
                helperText={errors.username?.message}
                required
                {...register("username")}
                className="w-full"
                placeholder="Nguyen Van A"
                label="Họ và Tên"
                autoComplete="off"
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

            <div className="flex md:flex-row flex-col w-full justify-between items-center gap-5 ">
                {/* Birthday */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="en-gb"
                >
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="birthday"
                        render={({ field }) => (
                            <DatePicker
                                className="w-full"
                                label="Ngày sinh"
                                minDate={minBirthday}
                                maxDate={maxBirthday}
                                disableFuture
                                {...field}
                                onChange={(newValue) => {
                                    if (newValue) field.onChange(newValue);
                                }}
                                slotProps={
                                    errors.birthday && {
                                        textField: {
                                            error: true,
                                            helperText: errors.birthday.message,
                                        },
                                    }
                                }
                            />
                        )}
                    />
                </LocalizationProvider>

                {/* Gender */}
                <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                        <RadioGroup
                            className="w-full flex justify-center"
                            row
                            defaultValue="male"
                            {...field}
                        >
                            <div className="flex justify-center w-full py-[7.5px] px-[14px]">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio value="male" />}
                                    label="Nam"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio value="female" />}
                                    label="Nữ"
                                />
                            </div>
                        </RadioGroup>
                    )}
                />
            </div>
            <ButtonNormal
                disabled={loading}
                className={`bg-primary w-full py-3 px-5 rounded-md text-white font-semibold ${
                    loading && "pointer-events-none"
                }`}
            >
                Đăng ký
            </ButtonNormal>
            <div className="my-3 w-full flex justify-center items-center sm:gap-2 gap-1 text-xs">
                <span className="text-slate-500">Bạn đã có tài khoản?</span>
                <NavLink
                    to="/auth/login"
                    className="text-primary font-semibold text-sm md:text-base"
                >
                    Đăng nhập ngay
                </NavLink>
            </div>
        </form>
    );
};

export default RegisterForm;
