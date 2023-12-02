import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonOutline, ButtonPrimary } from "../../../components/buttons";
import SettingGroup from "../../../components/settings/SettingGroup";
import InputField from "../../../components/inputs/InputField";
import SettingContainer from "../../../components/settings/SettingContainer";

type ProfileOverviewSettingField = {
    school: {
        name: string;
        faculty: string;
        majors: string;
    };
    socials: {
        facebook: string;
        twitter: string;
        instagram: string;
    };
};

const ProfileOverview = () => {
    const { register, handleSubmit } = useForm<ProfileOverviewSettingField>();

    const onSubmit: SubmitHandler<ProfileOverviewSettingField> = (data) =>
        console.log(data);

    const handleCancel = () => {};

    return (
        <SettingContainer header="Cài đặt tổng quan">
            <form className="flex-1 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-start w-full flex-wrap">
                    <SettingGroup className="max-w-[650px]" title="Học vấn">
                        <InputField
                            label="Tên trường"
                            placeholder="Đại học Thủ Dầu Một"
                            {...register("school.name")}
                        />
                        <InputField
                            label="Khoa/viện"
                            placeholder="Viện kĩ thuật - công nghệ"
                            {...register("school.faculty")}
                        />
                        <InputField
                            label="Chuyên ngành"
                            placeholder="Công nghệ thông tin"
                            {...register("school.majors")}
                        />
                    </SettingGroup>
                    <SettingGroup className="max-w-[650px]" title="Mạng xã hội">
                        <InputField
                            label="Facebook"
                            placeholder="Địa chỉ facebook"
                            {...register("socials.facebook")}
                        />
                        <InputField
                            label="Instagram"
                            placeholder="Địa chỉ instagram"
                            {...register("socials.instagram")}
                        />
                        <InputField
                            label="Twitter"
                            placeholder="Địa chỉ twitter"
                            {...register("socials.twitter")}
                        />
                    </SettingGroup>
                </div>
            </form>
            <div className="w-full flex justify-end items-center gap-5">
                <ButtonOutline onClick={handleCancel}>Hủy</ButtonOutline>
                <ButtonPrimary onClick={handleSubmit(onSubmit)}>
                    Lưu
                </ButtonPrimary>
            </div>
        </SettingContainer>
    );
};

export default ProfileOverview;
