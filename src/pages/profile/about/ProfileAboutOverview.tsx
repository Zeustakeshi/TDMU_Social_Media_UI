import { FaRegHeart } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import ProfileAboutItem from "../../../components/profile/profileAbout/ProfileAboutItem";

type Props = {};

const ProfileAboutOverview = ({}: Props) => {
    return (
        <div>
            <ProfileAboutItem tooltip="Trường học" icon={<LuSchool />}>
                Đang học công nghệ thông tin tại Đại học Thủ Dầu Một
            </ProfileAboutItem>
            <ProfileAboutItem tooltip="Vị trí" icon={<TiHomeOutline />}>
                Sống tại Tân Uyên
            </ProfileAboutItem>
            <ProfileAboutItem tooltip="Mối quan hệ" icon={<FaRegHeart />}>
                Không có mối quan hệ nào để hiển thị
            </ProfileAboutItem>
            <ProfileAboutItem
                tooltip="Công Việc"
                icon={<MdOutlineWorkOutline />}
            >
                Không có nơi làm việc để hiện thị
            </ProfileAboutItem>
        </div>
    );
};

export default ProfileAboutOverview;
