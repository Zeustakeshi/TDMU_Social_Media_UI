import { SocialMediaType } from "../common/types/global.type";
import { AiOutlineFacebook } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

export const getSocialMediaIcon = (type: SocialMediaType): React.ReactNode => {
    switch (type) {
        case "facebook":
            return <AiOutlineFacebook />;
        case "instagram":
            return <FaInstagram />;
        case "twitter":
            return <SlSocialTwitter />;
    }
};
