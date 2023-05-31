import React, { useEffect, useRef, useState } from "react";
//import { CircleArrowProps } from "./circle-arrow.component";
import './circle-arrow.styles.scss'


const CircleUpArrow = () => {
    const refee = useRef(document.createElement('div'));

    const [color, setColor] = useState('#9C9C9C')

    const hoverHandler = () => setColor('#3179CC');
    const hoverHandler2 = () => setColor('#9C9C9C');

    useEffect(() => {
        refee.current.addEventListener('mouseenter', hoverHandler);
        refee.current.addEventListener('mouseleave', hoverHandler2);

        return () => {
            refee.current.removeEventListener('mouseenter', hoverHandler);
            refee.current.removeEventListener('mouseleave', hoverHandler2);
        }
    })


    return(
        <div ref={refee}>
            <svg className="svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 14.2918L12 8.79178L6.5 14.2918" stroke={color} strokeWidth="1.13793" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 1C5.92708 1 1 5.92708 1 12C1 18.0729 5.92708 23 12 23C18.0729 23 23 18.0729 23 12C23 5.92708 18.0729 1 12 1Z" stroke={color} strokeWidth="1.13793" strokeMiterlimit="10"/>
            </svg>
        </div>
    )
}

export default CircleUpArrow;