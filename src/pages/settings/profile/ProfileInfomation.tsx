import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ButtonOutline, ButtonPrimary } from "../../../components/buttons";
import InputField from "../../../components/inputs/InputField";
import InputTextareaField from "../../../components/inputs/InputTextareaField";
import SettingGroup from "../../../components/settings/SettingGroup";
import SettingContainer from "../../../components/settings/SettingContainer";

type ProfileInfomationSettingField = {
    address: string;
    username: string;
    phone: string;
    office: string;
    description: string;
    nicknames: string[];
};

const ProfileInfomation = () => {
    const methods = useForm<ProfileInfomationSettingField>();
    const onSubmit: SubmitHandler<ProfileInfomationSettingField> = (data) =>
        console.log(data);

    const handleCancel = () => {};

    return (
        <SettingContainer header="Cài đặt thông tin cá nhân">
            <FormProvider {...methods}>
                <form
                    className="flex-1 w-full"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-8">
                        <SettingGroup title="Giới thiệu">
                            <InputField
                                label="Tên người dùng"
                                placeholder="ví dụ: spiderman"
                                {...methods.register("address")}
                            />
                            <InputTextareaField
                                label="Mô tả"
                                placeholder="Nhập mô tả của bạn"
                                maxLength={3000}
                                className="max-h-[250px] min-h-[150px]"
                            />
                        </SettingGroup>

                        <SettingGroup title="Liên hệ">
                            <InputField
                                label="Địa chỉ"
                                placeholder="06 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                                {...methods.register("address")}
                            />
                            <InputField
                                label="Số điện thoại"
                                placeholder="+84987654321"
                                {...methods.register("phone")}
                            />
                            <InputField
                                label="Công ty"
                                placeholder="06 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                                {...methods.register("office")}
                            />
                        </SettingGroup>

                        <SettingGroup title="Khác">
                            <InputField
                                className="flex-1"
                                label="Tên gọi khác (nickname)"
                                placeholder="..."
                            />
                        </SettingGroup>
                    </div>
                </form>
                <div className="w-full flex justify-end items-center gap-5">
                    <ButtonOutline onClick={handleCancel}>Hủy</ButtonOutline>
                    <ButtonPrimary onClick={methods.handleSubmit(onSubmit)}>
                        Lưu
                    </ButtonPrimary>
                </div>
            </FormProvider>
        </SettingContainer>
    );
};

export default ProfileInfomation;
