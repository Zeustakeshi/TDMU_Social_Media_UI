import React, { useContext } from "react";

type TabnavagatorProviderProps = {
    children: React.ReactNode;
};

type ITabnavagatorContext = {};

const TabnavagatorContext = React.createContext<ITabnavagatorContext | null>(
    null
);

const TabnavagatorProvider: React.FC<TabnavagatorProviderProps> = ({
    children,
}) => {
    const values = {};

    return (
        <TabnavagatorContext.Provider value={values}>
            {children}
        </TabnavagatorContext.Provider>
    );
};

const useTabnavagator = () => {
    const context = useContext(TabnavagatorContext);
    if (typeof context === "undefined" || !context) {
        throw new Error(
            "useTabnavagator must be used within TabnavagatorProvider"
        );
    }
    return context;
};

export { TabnavagatorProvider, useTabnavagator };
