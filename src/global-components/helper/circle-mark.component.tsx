import React, { useEffect, useRef, useState } from "react";

import './circle-arrow.styles.scss';

const CircleMark = () => {

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
    
    return (
        <div ref={refee}>
            <svg className="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3664 11.6832C18.3664 7.99351 15.3728 5 11.6832 5C7.99351 5 5 7.99351 5 11.6832C5 15.3728 7.99351 18.3664 11.6832 18.3664C15.3728 18.3664 18.3664 15.3728 18.3664 11.6832Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M15.025 8.89844L10.3468 14.4678L8.3418 12.24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default CircleMark;