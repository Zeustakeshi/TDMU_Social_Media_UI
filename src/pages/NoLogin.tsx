import React from "react";
import Card from "../components/cards/Cards";
import { ButtonLogin } from "../components/buttons";

type Props = {};

const NoLogin: React.FC<Props> = ({}) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Card
                className="flex justify-center items-center p-10"
                wrapperClassName="flex flex-col justify-center items-center"
            >
                <h2 className="text-2xl font-semibold text-slate-600 my-8">
                    Vui lòng đăng nhập để sử dụng tính năng này
                </h2>
                <ButtonLogin>Đăng nhập ngay</ButtonLogin>
            </Card>
        </div>
    );
};

export default NoLogin;
