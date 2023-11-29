import { NavLink } from "react-router-dom";
import { SocialMediaType } from "../../../common/types/global.type";
import FriendCard from "../../cards/FriendCard";

type SocialMediaItemType = {
    type: SocialMediaType;
    to: string;
};

const socialMedias: SocialMediaItemType[] = [
    {
        to: "/",
        type: "facebook",
    },
    {
        to: "/",
        type: "twitter",
    },
    {
        to: "/",
        type: "instagram",
    },
];

const MightYouLike = () => {
    return (
        <FriendCard
            socialMedias={socialMedias}
            header={
                <div className="text-sm flex justify-between items-center">
                    <span className="font-semibold">Bạn có thể thích</span>
                    <NavLink to="/friends" className="text-primary font-medium">
                        Thêm
                    </NavLink>
                </div>
            }
        ></FriendCard>
    );
};

export default MightYouLike;
