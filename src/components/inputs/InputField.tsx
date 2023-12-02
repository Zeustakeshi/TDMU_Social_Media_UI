import React, { forwardRef } from "react";

type Props = {
    label?: string;
    labelProps?: React.ComponentProps<"label">;
    error?: any;
    className?: string;
} & React.ComponentProps<"input">;

const InputField = forwardRef<HTMLInputElement, Props>(
    ({ label, labelProps, error, className, ...props }, ref) => {
        return (
            <div className="my-4 flex flex-col justify-start items-start gap-3 w-full">
                <h3 className="font-medium text-slate-500 text-base">
                    {label}
                </h3>
                <label className="w-full" {...labelProps}>
                    <input
                        ref={ref}
                        className={`min-w-full max-w-full outline-primary border border-slate-300 px-5 py-3 rounded-md ${
                            className ? className : ""
                        }`}
                        {...props}
                    />
                    {error && (
                        <span className="text-sm text-se-red font-medium ml-2"></span>
                    )}
                </label>
            </div>
        );
    }
);

export default InputField;
