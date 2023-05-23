import React from "react";
import { HamburgerContext } from "./hambuger.context";
import { HamburgerProps } from "./hambuger.context";

const HamburgerProvider = ({children}: {children: JSX.Element}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const value = {
        isOpen,
        setIsOpen
    } as HamburgerProps
    
    return <HamburgerContext.Provider value={value}>{children}</HamburgerContext.Provider>
}

export default HamburgerProvider;