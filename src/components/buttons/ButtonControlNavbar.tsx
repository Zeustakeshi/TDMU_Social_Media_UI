import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../redux/fetures/app.slice";

type Props = {};

const ButtonControlNavbar: React.FC<Props> = () => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(toggleNavbar())}
            className="border border-slate-200 p-2 rounded-md cursor-pointer"
        >
            <AiOutlineMenu></AiOutlineMenu>
        </button>
    );
};

export default ButtonControlNavbar;
