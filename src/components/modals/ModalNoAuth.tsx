import { Modal, ModalProps } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import Card from "../cards/Cards";
import ButtonLogin from "../buttons/ButtonLogin";

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
} & Omit<ModalProps, "children">;

const ModalNoAuth: React.FC<Props> = ({ setShowModal, ...props }) => {
    return (
        <Modal {...props}>
            <Card
                className="abs-center min-w-[300px] "
                header={
                    <div className="px-8 py-5">
                        <p className="text-xl font-medium text-slate-600 text-center">
                            Bạn cần đăng nhập để thực hiện chức năng này
                        </p>
                    </div>
                }
            >
                <div className="flex justify-start items-start gap-5 mb-5">
                    <ButtonLogin>Đăng nhập ngay</ButtonLogin>
                </div>
            </Card>
        </Modal>
    );
};

export default ModalNoAuth;
