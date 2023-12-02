import ProfileTimeline from "../../components/profile/ProfileTimeline";
import ProfileIntro from "../../components/profile/profileIntro/ProfileIntro";

type Props = {};

const Profile = ({}: Props) => {
    // const { id } = useParams();

    return (
        <div className="w-full flex justify-start items-start gap-5">
            <ProfileIntro></ProfileIntro>
            <ProfileTimeline></ProfileTimeline>
        </div>
    );
};

export default Profile;
