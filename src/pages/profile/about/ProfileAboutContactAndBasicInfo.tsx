import moment from "moment";
import { FaTransgender } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import { getSocialMediaIcon } from "../../../utils/socialmedia.util";
import ProfileAboutGroup from "../../../components/profile/profileAbout/ProfileAboutGroup";
import ProfileAboutItem from "../../../components/profile/profileAbout/ProfileAboutItem";

const ProfileAboutContactAndBasicInfo = () => {
    return (
        <div>
            <ProfileAboutGroup title="Thông tin liên hệ">
                <ProfileAboutItem tooltip="Số điện thoại" icon={<LuPhone />}>
                    +840912342564
                </ProfileAboutItem>
                <ProfileAboutItem tooltip="Email" icon={<HiOutlineMail />}>
                    nguyenvana@gmail.com
                </ProfileAboutItem>
            </ProfileAboutGroup>
            <ProfileAboutGroup title="Mạng xã hội">
                <ProfileAboutItem
                    to="https://facebook.com"
                    tooltip="facebook"
                    icon={getSocialMediaIcon("facebook")}
                >
                    https://facebook.con
                </ProfileAboutItem>
                <ProfileAboutItem
                    to="https://facebook.com"
                    tooltip="instagram"
                    icon={getSocialMediaIcon("instagram")}
                >
                    https://instagram.con
                </ProfileAboutItem>
                <ProfileAboutItem
                    to="https://facebook.com"
                    tooltip="twitter"
                    icon={getSocialMediaIcon("twitter")}
                >
                    https://twitter.con
                </ProfileAboutItem>
            </ProfileAboutGroup>

            <ProfileAboutGroup title="Thông tin cơ bản">
                <ProfileAboutItem tooltip="Giới tính" icon={<FaTransgender />}>
                    Nam
                </ProfileAboutItem>
                <ProfileAboutItem
                    tooltip="Sinh nhật"
                    icon={<LiaBirthdayCakeSolid />}
                >
                    {moment(new Date()).format("L")}
                </ProfileAboutItem>
            </ProfileAboutGroup>
        </div>
    );
};

export default ProfileAboutContactAndBasicInfo;
