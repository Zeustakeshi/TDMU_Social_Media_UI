import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { CallState } from "../../common/enums/call.enum";
import { setCallState } from "../../redux/fetures/chat.slice";
import { RootState } from "../../redux/store";
import { ModalCalling } from "../modals/call";
import ModalWatting from "../modals/call/ModalWattingCall";

type Props = {};

const ButtonVoiceCall: React.FC<Props> = ({}) => {
    const [showModal, setShowModal] = useState(false);
    const { callState } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();

    const handleCall = () => {
        if (callState === CallState.ON_CALLING) {
            dispatch(setCallState(CallState.IN_CALLING));
            setShowModal(true);
            return;
        }

        // Send request use call

        // set callState = Watting

        dispatch(setCallState(CallState.WATTING));
        setShowModal(true);
        // listen other user accept call

        setTimeout(() => {
            // if other user accept call  set callState = IN_CALLING
            dispatch(setCallState(CallState.IN_CALLING));
        }, 4000);
    };

    return (
        <>
            <button
                onClick={handleCall}
                className="p-3 hover:bg-slate-100 rounded-md"
            >
                <IoCallOutline></IoCallOutline>
            </button>
            {showModal && callState === CallState.WATTING && (
                <ModalWatting
                    open={showModal}
                    setShowModal={setShowModal}
                    onClose={() => setShowModal(false)}
                ></ModalWatting>
            )}

            {showModal && callState === CallState.IN_CALLING && (
                <ModalCalling
                    open={showModal}
                    setShowModal={setShowModal}
                    onClose={() => setShowModal(false)}
                ></ModalCalling>
            )}
        </>
    );
};

export default ButtonVoiceCall;
