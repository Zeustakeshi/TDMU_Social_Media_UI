import { ModalProps } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { CallState } from "../../../common/enums/call.enum";
import { setCallState } from "../../../redux/fetures/chat.slice";
import { RootState } from "../../../redux/store";
import Card from "../../cards/Cards";
import Logo from "../../logo/Logo";
import BaseModal from "../BaseModal";

type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    canFullScreen?: boolean;
} & ModalProps;
const ModalCall: React.FC<Props> = ({
    setShowModal,
    canFullScreen = true,
    children,
    ...props
}) => {
    const [fullScreen, setFullScreen] = useState(false);

    const { callState } = useSelector((state: RootState) => state.chat);

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        if (callState === CallState.IN_CALLING) {
            dispatch(setCallState(CallState.ON_CALLING));
        }
        setShowModal(false);
    };

    return (
        <BaseModal {...props} onClose={handleCloseModal}>
            <Card
                className={`abs-center ${
                    fullScreen ? "w-screen h-screen" : "min-w-[800px] min-h-max"
                } bg-white shadow-md`}
                resetHeaderStyle
                header={
                    <div className="relative flex justify-center items-center p-2">
                        <div className="flex-1 justify-start flex">
                            <Logo></Logo>
                        </div>
                        <div className="absolute z-50 right-3 flex justify-end items-center">
                            {canFullScreen && (
                                <button
                                    onClick={() =>
                                        setFullScreen((prev) => !prev)
                                    }
                                    className="p-3 rounded-md hover:bg-slate-200"
                                >
                                    {fullScreen ? (
                                        <AiOutlineFullscreenExit />
                                    ) : (
                                        <AiOutlineFullscreen />
                                    )}
                                </button>
                            )}
                            <button
                                onClick={handleCloseModal}
                                className="p-3 rounded-md hover:bg-slate-200"
                            >
                                <GrClose />
                            </button>
                        </div>
                    </div>
                }
                wrapperClassName={`${fullScreen ? "w-full h-full" : ""}`}
            >
                {children}
            </Card>
        </BaseModal>
    );
};

export default ModalCall;
