import { NavLink } from "react-router-dom";
import Card from "../../../components/cards/Cards";
import {
    NewUserBoardProvider,
    useNewUserBoard,
} from "../../../contexts/NewUserBoard.context";
import { APP_NAME } from "../../../utils/constants";
import TextOption from "./TextOption";
import { NewUserSchemaOption, newUserSchemaOptions } from "./schema";
import { ButtonNormal } from "../../../components/buttons";

const NewUser = ({}) => {
    return (
        <div className="w-screen h-screen relative bg-[url('/assets/teamwork_background.jpg')] bg-center bg-no-repeat bg-cover">
            <NewUserBoardProvider>
                <div className="abs-center w-full h-full bg-slate-800 backdrop-blur-none bg-opacity-25 z-0"></div>
                <UserInfoBoard></UserInfoBoard>
                <UserInfoShowBoard></UserInfoShowBoard>
            </NewUserBoardProvider>
        </div>
    );
};

const UserInfoBoard = () => {
    return (
        <Card
            className="absolute top-[50%] -translate-y-[50%] right-20 w-[40%] h-[80%]"
            wrapperClassName="p-5 text-center h-full w-full flex flex-col gap-5 justify-between"
        >
            <div>
                <h2 className="text-4xl font-semibold text-center my-6">
                    Chào mừng đến với {APP_NAME}
                </h2>

                <h4 className="text-md text-slate-500 font-semibold">
                    Hãy giới thiệu đôi chút về bạn cho cộng đồng {APP_NAME}
                </h4>
                <div className="text-justify my-6 mt-10 p-5">
                    <p className="text-2xl leading-loose">
                        <span className="font-semibold text-primary">
                            Xin chào {APP_NAME}!
                        </span>{" "}
                        Tôi là{" "}
                        <TextOption
                            type={NewUserSchemaOption.role}
                            schema={newUserSchemaOptions.role}
                        ></TextOption>{" "}
                        của trường đại học Thủ Dầu Một, Tôi thuộc{" "}
                        <TextOption
                            type={NewUserSchemaOption.department}
                            schema={newUserSchemaOptions.department}
                        ></TextOption>
                        . Tôi sử dụng {APP_NAME} cho việc{" "}
                        <TextOption
                            type={NewUserSchemaOption.purpose}
                            schema={newUserSchemaOptions.purpose}
                        ></TextOption>
                    </p>
                </div>
            </div>
            <div className="p-5 flex justify-between items-center">
                <NavLink
                    to="/"
                    className="text-slate-900 hover:text-primary transition-all"
                >
                    Bỏ qua
                </NavLink>
                <ButtonNormal className="px-5 py-4 rounded-md bg-primary text-white font-semibold">
                    Bắt đầu
                </ButtonNormal>
            </div>
        </Card>
    );
};

const UserInfoShowBoard = () => {
    const { userInfo } = useNewUserBoard();
    return (
        <div className=" absolute top-[50%] -translate-y-[50%] left-20 w-[50%] h-[80%] z-10">
            {userInfo?.role.url && (
                <div className="absolute top-0 left-0 rounded-full p-5 shadow-md bg-white w-[200px] h-[200px]">
                    <img
                        className="w-full h-full object-cover "
                        src={userInfo?.role.url}
                        alt="user-role"
                    />
                </div>
            )}
            {userInfo?.department.url && (
                <div className="absolute top-[50%] left-[10%] rounded-full p-5 shadow-md bg-white w-[200px] h-[200px]">
                    <img
                        className="w-full h-full object-cover "
                        src={userInfo?.department.url}
                        alt="user-role"
                    />
                </div>
            )}
            {userInfo?.purpose.url && (
                <div className="absolute top-[10%] right-[20%] rounded-full p-5 shadow-md bg-white w-[200px] h-[200px]">
                    <img
                        className="w-full h-full object-cover "
                        src={userInfo?.purpose.url}
                        alt="user-role"
                    />
                </div>
            )}
        </div>
    );
};

export default NewUser;
