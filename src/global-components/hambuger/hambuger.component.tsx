import React from "react";
import { HamburgerContext } from "@/context/hambuger.context";

import './hambuger.styles.scss'

const Hambuger = () => {
    
    const {isOpen, setIsOpen} = React.useContext(HamburgerContext);
    //console.log(isOpen);
    //(() => setIsOpen(true))();
    //console.log(isOpen);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div onClick={toggle} className={`hambuger ${isOpen? "hambuger--close" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hambuger;