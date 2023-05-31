import React, {useRef, useEffect, useState} from 'react';
//import circleArrow from '../../assets/images/circle-up.svg'

import './circle-arrow.styles.scss'

export type CircleArrowProps = {
    color: string;
} 


const CircleArrow = () => {
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
            <svg className='svg'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 9.70822L12 15.2082L17.5 9.70822" stroke={color} strokeWidth="1.13793" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 23C18.0729 23 23 18.0729 23 12C23 5.92708 18.0729 1 12 1C5.92708 1 0.999998 5.92708 0.999999 12C0.999999 18.0729 5.92708 23 12 23Z" stroke={color} strokeWidth="1.13793" strokeMiterlimit="10"/>
            </svg>
        </div>
    )
}

export default CircleArrow;