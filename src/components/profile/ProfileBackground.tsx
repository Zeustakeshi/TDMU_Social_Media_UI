type Props = {};

const ProfileBackground = ({}: Props) => {
    return (
        <div className="w-full h-[500px] max-h-[500px] bg-slate-300 rounded-xl">
            <img
                className="w-full h-full object-cover rounded-[inherit]"
                src="https://source.unsplash.com/random"
                alt=""
            />
        </div>
    );
};

export default ProfileBackground;
