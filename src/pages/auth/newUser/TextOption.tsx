import { FormControl, NativeSelect } from "@mui/material";
import React from "react";
import { useNewUserBoard } from "../../../contexts/NewUserBoard.context";
import { NewUserSchemaOption, SchemaOptionType } from "./schema";

type TextOptionProps = {
    type: NewUserSchemaOption;
    schema: SchemaOptionType;
};

const TextOption: React.FC<TextOptionProps> = ({ schema, type }) => {
    const { setUserInfo } = useNewUserBoard();

    return (
        <div className="mx-4 inline-block ">
            <FormControl className="min-w-min">
                <NativeSelect
                    onChange={(e) =>
                        setUserInfo((prev) => ({
                            ...prev,
                            [type]: schema.opitons[+e.target.value as number],
                        }))
                    }
                    defaultValue={0}
                    inputProps={{
                        className: "!text-slate-500",
                    }}
                    sx={{
                        fontSize: 22,
                    }}
                >
                    {schema.opitons.map((option, index) => {
                        return (
                            <option key={index} value={index}>
                                {option.name}
                            </option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    );
};
export default TextOption;
