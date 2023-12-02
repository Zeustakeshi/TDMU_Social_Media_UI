import { LuSchool } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import ProfileAboutGroup from "../../../components/profile/profileAbout/ProfileAboutGroup";
import ProfileAboutItem from "../../../components/profile/profileAbout/ProfileAboutItem";
const ProfileAboutEducation = () => {
    return (
        <div>
            <ProfileAboutGroup title="Trường Học">
                <ProfileAboutItem icon={<LuSchool />}>
                    Đang học Công nghệ thông tin tại Đại học Thủ Dầu Một
                </ProfileAboutItem>
            </ProfileAboutGroup>
            <ProfileAboutGroup title="Công việc">
                <ProfileAboutItem icon={<MdOutlineWorkOutline />}>
                    Không có nơi làm việc để hiển thị
                </ProfileAboutItem>
            </ProfileAboutGroup>
        </div>
    );
};

export default ProfileAboutEducation;
