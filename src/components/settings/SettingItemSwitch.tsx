import { Switch } from "@mui/material";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import SettingItem from "./SettingItem";

type Props = {
    children: React.ReactNode;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const SettingItemSwitch: React.FC<Props> = ({
    children,
    onChange,
    checked: defaultValue,
    className,
}) => {
    const [checked, setChecked] = useState<boolean>(defaultValue || false);

    return (
        <SettingItem
            onClick={() => setChecked((prev) => !prev)}
            className={twMerge(
                `flex justify-between items-center w-full max-w-[1200px] cursor-pointer hover:bg-slate-200 px-3 py-2 rounded-md `,
                className
            )}
        >
            <p className="text-lg text-slate-600 font-medium">{children}</p>
            <Switch
                checked={checked}
                onChange={onChange}
                size="medium"
                color="info"
            ></Switch>
        </SettingItem>
    );
};

export default SettingItemSwitch;
