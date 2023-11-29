import { ButtonOutline, ButtonPrimary } from "../buttons";

type Props = {};

const ProfileFollowAction = ({}: Props) => {
    return (
        <div className="flex justify-end items-center gap-5">
            <ButtonPrimary>Theo dõi</ButtonPrimary>
            {/* <ButtonNormal className="bg-primary text-white text-xl font-medium px-4 py-2 rounded-md">
                Nhắn tin
            </ButtonNormal> */}
            <ButtonOutline>Báo xấu</ButtonOutline>
        </div>
    );
};

export default ProfileFollowAction;
