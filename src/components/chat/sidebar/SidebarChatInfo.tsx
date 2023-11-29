import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiBlock, BiImage } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoVideo } from "react-icons/go";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import Avatar from "../../avatar/Avatar";
import Card from "../../cards/Cards";
import { HiOutlinePaintBrush } from "react-icons/hi2";

type Props = {};

const SidebarChatInfo: React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col justify-start items-center gap-5 p-5 bg-white h-full max-h-screen overflow-y-scroll hidden-scroll min-w-[400px] max-w-md rounded-tl-xl rounded-bl-xl">
            <Card className="w-full bg-gray-50 flex flex-col justify-center items-center p-5 text-center">
                <Avatar size={100}></Avatar>
                <div className="my-3">
                    <p className="text-lg">Minh Hieu</p>
                    <p className="text-xs text-slate-900">CEO-ABC</p>
                </div>
                <div className="text-xs text-slate-500 flex justify-start items-center gap-1">
                    <div className="relative rounded-full w-2 h-2 flex justify-center items-center ">
                        <span className=" w-full h-full inline-block rounded-[inherit]  bg-se-green animate-ping"></span>
                        <span className="w-2 h-2 abs-center   bg-green-500 rounded-[inherit] animate-none"></span>
                    </div>
                    <span>Đang hoạt động</span>
                </div>
            </Card>
            <SidebarChatInfoCard header="Cài đặt và quyền riêng tư">
                <SidebarChatInfoCardItem
                    leftIcon={
                        <span>
                            <IoNotificationsOffOutline></IoNotificationsOffOutline>
                        </span>
                    }
                >
                    <span>Tắt thông báo</span>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <span>
                            <BiBlock></BiBlock>
                        </span>
                    }
                >
                    <span>Chặn người này</span>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <span>
                            <HiOutlinePaintBrush></HiOutlinePaintBrush>
                        </span>
                    }
                >
                    <span>Đổi giao diện</span>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <span>
                            <RiDeleteBin5Line></RiDeleteBin5Line>
                        </span>
                    }
                >
                    <span>Xóa dữ liệu</span>
                </SidebarChatInfoCardItem>
            </SidebarChatInfoCard>
            <SidebarChatInfoCard header="File đã chia sẻ">
                <SidebarChatInfoCardItem
                    leftIcon={
                        <div className="p-3 rounded-md bg-white">
                            <BsFileEarmarkText></BsFileEarmarkText>
                        </div>
                    }
                    rightIcon={
                        <button>
                            <AiOutlineRight></AiOutlineRight>
                        </button>
                    }
                >
                    <div className="flex flex-col justify-center items-start text-sm">
                        <p className="">Tài liệu</p>
                        <p className="text-xs text-slate-700 flex justify-start items-center gap-2">
                            <span>85 files</span>
                            <span>200MB</span>
                        </p>
                    </div>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <div className="p-3 rounded-md bg-white">
                            <BiImage></BiImage>
                        </div>
                    }
                    rightIcon={
                        <button>
                            <AiOutlineRight></AiOutlineRight>
                        </button>
                    }
                >
                    <div className="flex flex-col justify-center items-start text-sm">
                        <p>Hình ảnh</p>
                        <p className="text-xs text-slate-700 flex justify-start items-center gap-2">
                            <span>85 files</span>
                            <span>200MB</span>
                        </p>
                    </div>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <div className="p-3 rounded-md bg-white">
                            <GoVideo></GoVideo>
                        </div>
                    }
                    rightIcon={
                        <button>
                            <AiOutlineRight></AiOutlineRight>
                        </button>
                    }
                >
                    <div className="flex flex-col justify-center items-start text-sm">
                        <p>Video</p>
                        <p className="text-xs text-slate-700 flex justify-start items-center gap-2">
                            <span>85 files</span>
                            <span>200MB</span>
                        </p>
                    </div>
                </SidebarChatInfoCardItem>
                <SidebarChatInfoCardItem
                    leftIcon={
                        <div className="p-3 rounded-md bg-white">
                            <FiMoreHorizontal></FiMoreHorizontal>
                        </div>
                    }
                    rightIcon={
                        <button>
                            <AiOutlineRight></AiOutlineRight>
                        </button>
                    }
                >
                    <div className="flex flex-col justify-center items-start text-sm">
                        <p>Khác</p>
                        <p className="text-xs text-slate-700 flex justify-start items-center gap-2">
                            <span>85 files</span>
                            <span>200MB</span>
                        </p>
                    </div>
                </SidebarChatInfoCardItem>
            </SidebarChatInfoCard>
        </div>
    );
};

type SidebarChatInfoCardProps = {
    children: React.ReactNode;
    header: string;
};
const SidebarChatInfoCard: React.FC<SidebarChatInfoCardProps> = ({
    children,
    header,
}) => {
    return (
        <Card
            header={
                <div className="border-b border-b-slate-200 p-5">{header}</div>
            }
            resetHeaderStyle
            className="bg-gray-50 w-full"
        >
            {children}
        </Card>
    );
};

type SidebarChatInfoCardItemProps = {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
};

const SidebarChatInfoCardItem: React.FC<SidebarChatInfoCardItemProps> = ({
    leftIcon,
    rightIcon,
    children,
}) => {
    return (
        <button className="w-full flex justify-between items-center hover:bg-gray-100 px-5 py-3 rounded-md">
            <div className="flex-1 flex justify-start items-center gap-4">
                {leftIcon}
                {children}
            </div>
            {rightIcon}
        </button>
    );
};

export default SidebarChatInfo;
