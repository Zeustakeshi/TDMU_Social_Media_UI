import React, { ChangeEvent, forwardRef } from "react";

type Props = {
    label?: string;
    labelProps?: React.ComponentProps<"label">;
    error?: any;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & React.ComponentProps<"textarea">;

const InputTextareaField = forwardRef<HTMLTextAreaElement, Props>(
    ({ label, labelProps, error, className, onChange, ...props }, ref) => {
        const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            e.target.style.height = "inherit";
            e.target.style.height = e.target.scrollHeight + "px";
            onChange?.(e);
        };

        return (
            <div className="flex flex-col justify-start items-start gap-3 w-full">
                <h3 className="font-medium text-slate-500 text-base">
                    {label}
                </h3>
                <label className="w-full" {...labelProps}>
                    <textarea
                        ref={ref}
                        className={`w-full outline-primary border border-slate-300 px-5 py-3 rounded-md custom-scroll resize-none ${
                            className ? className : ""
                        }`}
                        placeholder="nhập bình luận"
                        {...props}
                        onChange={handleChangeText}
                    />
                    {error && (
                        <span className="text-sm text-se-red font-medium ml-2"></span>
                    )}
                </label>
            </div>
        );
    }
);

export default InputTextareaField;
