import React, { SetStateAction, useContext, useState } from "react";
import {
    NewUserInfoOptionField,
    NewUserSchemaOption,
    newUserSchemaOptions,
} from "../pages/auth/newUser/schema";

type NewUserBoardProviderProps = {
    children: React.ReactNode;
};

type UserInfo = {
    [NewUserSchemaOption.role]: NewUserInfoOptionField;
    [NewUserSchemaOption.department]: NewUserInfoOptionField;
    [NewUserSchemaOption.purpose]: NewUserInfoOptionField;
};

type INewUserBoardContext = {
    userInfo: UserInfo | undefined;
    setUserInfo: React.Dispatch<SetStateAction<UserInfo>>;
};

const NewUserBoardContext = React.createContext<INewUserBoardContext | null>(
    null
);

const getNewUserInfoDefaultOption = (type: NewUserSchemaOption) => {
    return (
        newUserSchemaOptions[type].default ||
        newUserSchemaOptions[type].opitons[0]
    );
};

const newUserInfoDefault: UserInfo = {
    [NewUserSchemaOption.department]: getNewUserInfoDefaultOption(
        NewUserSchemaOption.department
    ),
    [NewUserSchemaOption.purpose]: getNewUserInfoDefaultOption(
        NewUserSchemaOption.purpose
    ),
    [NewUserSchemaOption.role]: getNewUserInfoDefaultOption(
        NewUserSchemaOption.role
    ),
};

const NewUserBoardProvider: React.FC<NewUserBoardProviderProps> = ({
    children,
}) => {
    const [userInfo, setUserInfo] = useState<UserInfo>(newUserInfoDefault);

    const values = { userInfo, setUserInfo };

    console.log({ userInfo });
    return (
        <NewUserBoardContext.Provider value={values}>
            {children}
        </NewUserBoardContext.Provider>
    );
};

const useNewUserBoard = () => {
    const context = useContext(NewUserBoardContext);
    if (typeof context === "undefined" || !context) {
        throw new Error(
            "useNewUserBoard must be used within NewUserBoardProvider"
        );
    }
    return context;
};

export { useNewUserBoard, NewUserBoardProvider };
