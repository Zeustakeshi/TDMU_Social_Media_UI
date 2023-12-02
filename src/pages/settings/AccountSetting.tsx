import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../../components/inputs/InputField";
import SettingContainer from "../../components/settings/SettingContainer";
import SettingGroup from "../../components/settings/SettingGroup";
import SettingItem from "../../components/settings/SettingItem";

type AccoutnSettingField = {
    username: string;
    email: string;
};

const AccountSetting = () => {
    const { register, handleSubmit } = useForm<AccoutnSettingField>();

    const onSubmit: SubmitHandler<AccoutnSettingField> = (data) =>
        console.log(data);

    return (
        <SettingContainer header="Cài đặt tài khoản">
            <SettingGroup title="Thông tin tài khoản">
                <form
                    className="flex-1 w-full"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex justify-between items-start  gap-10 w-full ">
                        <InputField
                            label="Tên người dùng"
                            placeholder="Spiderman"
                            {...register("username")}
                        />
                        <InputField
                            label="Email"
                            placeholder="nguyenvana@gmail.com"
                            {...register("email")}
                        />
                    </div>
                </form>
            </SettingGroup>
            <SettingGroup
                title="Bảo mật"
                wrapperClassName=" flex w-full flex-col gap-2 justify-start items-start"
            >
                <SettingItem className="text-start">Đổi mật khẩu</SettingItem>
                <SettingItem className="text-start">Đổi mật khẩu</SettingItem>
            </SettingGroup>
        </SettingContainer>
    );
};

export default AccountSetting;
