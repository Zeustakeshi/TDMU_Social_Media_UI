import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {} & TextFieldProps;

const InputPassword = forwardRef<HTMLInputElement, Props>(
    (props: Props, ref) => {
        const [show, setShow] = useState<boolean>(false);
        return (
            <TextField
                ref={ref}
                // type={show ? "text" : "password"}
                InputProps={{
                    type: show ? "text" : "password",
                    endAdornment: (
                        <InputAdornment position="start">
                            <span
                                className="p-4 cursor-pointer"
                                onClick={() => setShow((prev) => !prev)}
                            >
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
        );
    }
);

export default InputPassword;
