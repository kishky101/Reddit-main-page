import React from "react"


export type HamburgerProps = {
    isOpen: boolean;
    setIsOpen: (boolean: boolean) => void;
} 


export const HamburgerContext = React.createContext<HamburgerProps>({
    isOpen: false,
    setIsOpen: () => null
})
