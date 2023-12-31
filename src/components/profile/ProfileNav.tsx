import { useParams } from "react-router-dom";
import Card from "../cards/Cards";
import ProfileNavItem from "./ProfileNavItem";

type Props = {};

const ProfileNav = ({}: Props) => {
    const { id } = useParams();
    return (
        <Card
            className="w-full p-1 border-t my-5 "
            wrapperClassName="!p-0 flex justify-start items-center"
        >
            <ProfileNavItem
                label="Bài Viết"
                to={`/profile/${id}/`}
            ></ProfileNavItem>
            <ProfileNavItem
                label="Giới thiệu"
                to={`/profile/${id}/about/overview`}
            ></ProfileNavItem>
            <ProfileNavItem
                label="Bạn bè"
                to={`/profile/${id}/friends`}
            ></ProfileNavItem>
            <ProfileNavItem
                label="Ảnh"
                to={`/profile/${id}/photos`}
            ></ProfileNavItem>
        </Card>
    );
};

export default ProfileNav;
