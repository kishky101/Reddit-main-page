import React, { useEffect, useRef, useState } from "react";

const CircleUp = () => {

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7502 13.854L12.5002 10.604L9.25016 13.854" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 6C8.91146 6 6 8.91146 6 12.5C6 16.0885 8.91146 19 12.5 19C16.0885 19 19 16.0885 19 12.5C19 8.91146 16.0885 6 12.5 6Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
        </div>
    )
}

export default CircleUp;