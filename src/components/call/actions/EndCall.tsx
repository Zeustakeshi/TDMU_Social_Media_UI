import React from "react";
import { FiPhoneOff } from "react-icons/fi";
import { ButtonNormal } from "../../buttons";
import { useDispatch } from "react-redux";
import { setCallState } from "../../../redux/fetures/chat.slice";
import { CallState } from "../../../common/enums/call.enum";

type Props = {};

const EndCall: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();

    return (
        <ButtonNormal
            onClick={() => dispatch(setCallState(CallState.NOT_IN_CALL))}
            className="px-8 py-5 rounded-md bg-se-red text-white font-medium text-xl"
        >
            <FiPhoneOff></FiPhoneOff>
        </ButtonNormal>
    );
};

export default EndCall;
