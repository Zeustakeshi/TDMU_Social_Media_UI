import Avatar from "../avatar/Avatar";

type Props = {};

const ProfileAvatar = ({}: Props) => {
    return (
        <div className="w-[150px] h-[150px] absolute -bottom-[30px] left-[10px]">
            <Avatar isOnline size={150} className="bg-white"></Avatar>
        </div>
    );
};

export default ProfileAvatar;
