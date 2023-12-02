import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ButtonOutline, ButtonPrimary } from "../buttons";

type Props = {};

const ProfileAction = ({}: Props) => {
    const { info } = useSelector((state: RootState) => state.user);
    const { id: paramId } = useParams();

    const navigation = useNavigate();

    return (
        <div className="flex justify-end items-center gap-5">
            <ButtonPrimary>Theo dõi</ButtonPrimary>
            <ButtonOutline>Báo xấu</ButtonOutline>
            {info?.id === paramId && (
                <ButtonOutline
                    onClick={() =>
                        navigation(`/settings/profile/${paramId}/overview`)
                    }
                    className="py-4"
                >
                    <IoSettingsOutline />
                </ButtonOutline>
            )}
        </div>
    );
};

export default ProfileAction;
