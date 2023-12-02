import Avatar from "../avatar/Avatar";

type Props = { size: number };

const ProfileAvatar = ({ size }: Props) => {
    return (
        <div className={`w-[${size}px] h-[${size}px] `}>
            <Avatar isOnline size={size} className="bg-white"></Avatar>
        </div>
    );
};

export default ProfileAvatar;
