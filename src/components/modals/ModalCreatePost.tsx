import {
    Avatar,
    FormControl,
    MenuItem,
    Modal,
    ModalProps,
    Select,
    TextField,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BiHappy, BiImage } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ButtonNormal } from "../buttons";
import Card from "../cards/Cards";
import ImageUpload from "../imageUpload/ImageUpload";
import PreviewImage from "../imageUpload/PreviewImage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
} & Omit<ModalProps, "children">;

type FormValues = {
    content: string;
    file: string | Blob;
    privacy: 1 | 2 | 3;
};

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const ModelCreatePost: React.FC<Props> = ({ setShowModal, ...props }) => {
    const [postImageFile, setPostImageFile] = useState<string | Blob | null>(
        null
    );

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (
            postImageFile instanceof Blob &&
            !SUPPORTED_FORMATS.includes(postImageFile.type)
        ) {
            toast.error("Tệp không hỗ trợ");
            return;
        }
        console.log({
            ...data,
            postImageFile,
        });
    };
    return (
        <Modal {...props}>
            <Card
                className="abs-center min-w-[800px]"
                header={
                    <div className="w-full flex justify-between items-center">
                        <p className="text-slate-600 font-semibold">
                            Bài viết mới
                        </p>
                        <div className="flex justify-end items-center gap-2 text-sm">
                            <p className="text-sm text-slate-500">
                                Hiển thị cho
                            </p>
                            <Controller
                                name="privacy"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <FormControl className="w-[150px]">
                                            <Select
                                                size="small"
                                                defaultValue={1}
                                                {...field}
                                                {...register("privacy")}
                                            >
                                                <MenuItem value={1}>
                                                    Công khai
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    Bạn bè
                                                </MenuItem>
                                                <MenuItem value={3}>
                                                    Chỉ mình tôi
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    );
                                }}
                            ></Controller>
                            <ButtonNormal
                                onClick={() => setShowModal(false)}
                                className="text-xl text-slate-600"
                            >
                                <IoIosCloseCircleOutline />
                            </ButtonNormal>
                        </div>
                    </div>
                }
            >
                <div className="flex justify-start items-start gap-5 mb-5">
                    <Avatar
                        className="border"
                        sx={{ width: 65, height: 65 }}
                        src="/avatar.png"
                    ></Avatar>

                    <TextField
                        autoFocus
                        fullWidth
                        multiline
                        // rows={10}
                        maxRows={20}
                        minRows={10}
                        placeholder="Bạn đang nghĩ gì?"
                        required
                        inputProps={{
                            maxLength: 2000,
                            translate: "yes",
                            className: "custom-scroll ",
                        }}
                        {...register("content")}
                    ></TextField>
                </div>
                <AddPostAction
                    postImageFile={postImageFile}
                    setPostImageFile={setPostImageFile}
                ></AddPostAction>
                <ButtonNormal
                    onClick={handleSubmit(onSubmit)}
                    className="mt-8 w-full px-6 py-3 rounded-md bg-primary text-white font-semibold"
                >
                    Đăng
                </ButtonNormal>
            </Card>
        </Modal>
    );
};

type AddPostActionProps = {
    setPostImageFile: Dispatch<SetStateAction<string | Blob | null>>;
    postImageFile: string | Blob | null;
};
const AddPostAction: React.FC<AddPostActionProps> = ({
    setPostImageFile,
    postImageFile,
}) => {
    return (
        <div className="w-full flex flex-col flex-wrap items-center justify-start gap-3">
            {postImageFile && (
                <div className="relative w-[500px] h-[300px]">
                    <button
                        onClick={() => setPostImageFile(null)}
                        className="absolute top-2 right-2 p-3"
                    >
                        <IoCloseCircleOutline></IoCloseCircleOutline>
                    </button>
                    <PreviewImage file={postImageFile}></PreviewImage>
                </div>
            )}
            <div className="flex justify-between items-center w-full">
                <ul className="flex justify-start items-center gap-3">
                    <AddPostActionItem
                        icon={<FiVideo></FiVideo>}
                        label="Live Video"
                    />
                    <ImageUpload
                        file={postImageFile}
                        handleChange={(e) => {
                            if (e.target.files?.item(0)) {
                                setPostImageFile(e.target.files?.item(0));
                            }
                        }}
                    >
                        <AddPostActionItem
                            icon={<BiImage></BiImage>}
                            label="Photo/Video"
                        />
                    </ImageUpload>
                    <AddPostActionItem
                        icon={<BiHappy></BiHappy>}
                        label="Feeling"
                    />
                </ul>
            </div>
        </div>
    );
};

type AddPostActionItemType = {
    label: string;
    icon: React.ReactNode;
};

const AddPostActionItem: React.FC<AddPostActionItemType> = ({
    label,
    icon,
}) => {
    return (
        <li className="flex justify-center items-center gap-2 text-slate-600 cursor-pointer">
            <span>{icon}</span>
            <span>{label}</span>
        </li>
    );
};

export default ModelCreatePost;
