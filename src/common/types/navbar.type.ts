export type NavbarType = "static" | "absolute";

export type NavbarItemType = {
    icon: React.ReactNode;
    label: string;
    to: string;
    isAcvite?: boolean;
};
