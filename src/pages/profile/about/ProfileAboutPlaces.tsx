import { TiHomeOutline } from "react-icons/ti";
import ProfileAboutItem from "../../../components/profile/profileAbout/ProfileAboutItem";

const ProfileAboutPlaces = () => {
    return (
        <div>
            <ProfileAboutItem tooltip="Vị trí" icon={<TiHomeOutline />}>
                Sống tại Tân Uyên
            </ProfileAboutItem>
        </div>
    );
};

export default ProfileAboutPlaces;
