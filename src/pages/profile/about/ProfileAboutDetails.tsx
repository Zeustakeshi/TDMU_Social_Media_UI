import { MdFavoriteBorder } from "react-icons/md";
import ProfileAboutGroup from "../../../components/profile/profileAbout/ProfileAboutGroup";
import ProfileAboutItem from "../../../components/profile/profileAbout/ProfileAboutItem";

const ProfileAboutDetails = () => {
    return (
        <div>
            <ProfileAboutGroup title="Mô tả bản thân">
                <p className="text-slate-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quos quia officia voluptatibus qui tempora! Ullam
                    molestias quasi, cum dolores quo veniam quaerat amet, earum
                    inventore commodi, maiores reprehenderit id.
                </p>
            </ProfileAboutGroup>
            <ProfileAboutGroup title="Sở thích">
                {new Array(5).fill(0).map((_, index) => {
                    return (
                        <ProfileAboutItem
                            key={index}
                            tooltip="Sở thích"
                            icon={<MdFavoriteBorder />}
                        >
                            Sở thích {index + 1}
                        </ProfileAboutItem>
                    );
                })}
            </ProfileAboutGroup>
            <ProfileAboutGroup title="Các tên khác">
                <ProfileAboutItem tooltip="Sở thích">
                    Không có thông tin
                </ProfileAboutItem>
            </ProfileAboutGroup>
        </div>
    );
};

export default ProfileAboutDetails;
