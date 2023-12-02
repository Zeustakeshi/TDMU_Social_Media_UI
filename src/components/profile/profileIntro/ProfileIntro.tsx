import { Props } from "emoji-picker-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { IoHeartCircleOutline, IoSchoolOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineClass } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { ProfileIntroType } from "../../../common/types/profile.type";
import { getSocialMediaIcon } from "../../../utils/socialmedia.util";
import Card from "../../cards/Cards";
import ProfileIntroItem from "./ProfileIntroItem";
import { Skeleton } from "@mui/material";

const ProfileInfoMock: ProfileIntroType = {
    userId: crypto.randomUUID(),
    school: {
        name: "Đại học Thủ Dầu Một",
        faculty: "VIện Kĩ Thuật Công Nghệ",
        majors: "Công Nghệ Thông Tin",
    },
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis recusandae explicabo excepturi voluptatum blanditiis aliquam, culpa fuga odio non repellendus saepe cumque quam magnam reprehenderit distinctio. Qui, similique nesciunt.",
    gender: "MALE",
    birtday: new Date().toISOString(),
    socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
    },
    following: 200,
    follower: 300,
};

const ProfileIntro: React.FC<Props> = () => {
    const [info, setInfo] = useState<ProfileIntroType>();
    const [loadding, setLoadding] = useState<boolean>(false);

    useEffect(() => {
        // fetch intro here
        (async () => {
            setLoadding(true);
            await new Promise<ProfileIntroType>((resolve) => {
                setTimeout(() => {
                    resolve(ProfileInfoMock);
                }, 10000);
            }).then((data) => {
                setInfo(data);
            });
            setLoadding(false);
        })();
    }, []);

    return (
        <Card
            header={
                <div>
                    <h3 className="text-2xl text-slate-500 font-semibold mb-3">
                        Giới Thiệu:
                    </h3>
                    {loadding ? (
                        <Skeleton variant="text" className="min-h-[90px]" />
                    ) : (
                        info?.description && (
                            <p className="text-lg text-slate-600">
                                {info?.description}
                            </p>
                        )
                    )}
                </div>
            }
            className="min-w-[420px] max-w-[420px] min-h-[1000px] app-body-sticky-body-padding "
        >
            <div>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={<IoSchoolOutline />}
                    tooltipLabel="Trường học"
                >
                    {info?.school.name}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={<MdOutlineClass />}
                    tooltipLabel="Khoa/viện"
                >
                    {info?.school.faculty}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={<PiStudent />}
                    tooltipLabel="Chuyên ngành"
                >
                    {info?.school.majors}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={<LiaBirthdayCakeSolid />}
                    tooltipLabel="Sinh nhật"
                >
                    {moment(info?.birtday).format("L")}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={getSocialMediaIcon("facebook")}
                    url={info?.socials.facebook}
                    tooltipLabel="facebook"
                >
                    {info?.socials.facebook}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={getSocialMediaIcon("instagram")}
                    url={info?.socials.instagram}
                    tooltipLabel="instagram"
                >
                    {info?.socials.instagram}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={getSocialMediaIcon("twitter")}
                    url={info?.socials.twitter}
                    tooltipLabel="twitter"
                >
                    {info?.socials.twitter}
                </ProfileIntroItem>
                <ProfileIntroItem
                    isLoading={loadding}
                    icon={<IoHeartCircleOutline />}
                    tooltipLabel="Người theo dõi"
                >
                    {info?.follower} người theo dõi
                </ProfileIntroItem>
            </div>
        </Card>
    );
};

export default ProfileIntro;
