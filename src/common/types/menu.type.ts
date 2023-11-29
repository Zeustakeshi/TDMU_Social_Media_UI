import React from "react";

export type MenuPositionType =
    | "top"
    | "top-left"
    | "top-right"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom-right"
    | "bottom";

export type MenuItemType = {
    type?: string;
    title: string;
    children?: MenuSchemaType;
    to?: string;
    icon?: React.ReactNode;
};

export type MenuSchemaType = {
    header: React.ReactNode;
    data: MenuItemType[];
};
