import React from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { UserShortInfo } from "../../common/types/user.type";
import Avatar from "../avatar/Avatar";
import { ButtonOutline, ButtonPrimary } from "../buttons";
import Card from "./Cards";

type Props = {
    children: React.ReactNode;
    className?: string;
    popperClassName?: string;
    user: UserShortInfo;
};

const UserInfoCard: React.FC<Props> = ({
    children,
    className,
    popperClassName,
    user,
}) => {
    const navigation = useNavigate();

    const handleNavigate = () => {
        navigation(`/profile/${user.id}`);
    };

    return (
        <div className={twMerge("relative group", className)}>
            <Card
                className={twMerge(
                    "absolute  group-hover:block hidden transition-all bg-white z-[1000] top-0 left-0 shadow-2xl min-w-[400px] min-h-[200px]",
                    popperClassName
                )}
            >
                <div className="flex justify-start items-start gap-5">
                    <Avatar size={120} src={user.avatar}></Avatar>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <div>
                            <h4 className="text-2xl font-semibold text-slate-600">
                                {user.username}
                            </h4>
                            <p className="max-w-[200px] text-primary font-medium text-sm">
                                {user.email}
                            </p>
                        </div>
                        <p className="max-w-[200px] text-sm text-slate-500 font-medium">
                            {user.shortDescription.slice(0, 2000)}
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-between items-center gap-5">
                    <ButtonPrimary onClick={handleNavigate} className="flex-1">
                        Theo dõi
                    </ButtonPrimary>
                    <ButtonOutline className="flex-1">Chặn</ButtonOutline>
                </div>
            </Card>
            {children}
        </div>
    );
};

export default UserInfoCard;
