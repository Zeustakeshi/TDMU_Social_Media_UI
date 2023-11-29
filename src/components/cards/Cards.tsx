import React, { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    width?: number;
    height?: number;
    className?: string;
    headerLine?: boolean;
    footerLine?: boolean;
    headerClassName?: string;
    footerClassName?: string;
    resetFooterStyle?: boolean;
    resetHeaderStyle?: boolean;
    wrapperClassName?: string;
} & ComponentProps<"div">;

const Card = forwardRef<HTMLDivElement, Props>(
    (
        {
            header,
            footer,
            children,
            className = "",
            wrapperClassName = "",
            headerClassName = "",
            footerClassName = "",
            headerLine = true,
            footerLine = true,
            resetFooterStyle = false,
            resetHeaderStyle = false,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...props}
                className={twMerge(`bg-white rounded-xl  shadow-sm`, className)}
            >
                {header && (
                    <div
                        className={
                            !resetHeaderStyle
                                ? `${
                                      headerLine ? "border-b" : ""
                                  } border-slate-200 p-4 ${headerClassName}`
                                : headerClassName
                        }
                    >
                        {header}
                    </div>
                )}
                <div className={`p-4 ${wrapperClassName}`}>{children}</div>
                {footer && (
                    <div
                        className={
                            !resetFooterStyle
                                ? `${
                                      footerLine ? "border-t" : ""
                                  } border-slate-200 p-4 ${footerClassName}`
                                : footerClassName
                        }
                    >
                        {footer}
                    </div>
                )}
            </div>
        );
    }
);

export default Card;
