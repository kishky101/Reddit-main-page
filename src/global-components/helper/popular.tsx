import React from "react"


type PopularSvgProp = {
    color: string;
}

const PopularSvg:React.FC<PopularSvgProp> = ({color}) => {
    return (
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2480)">
        <path d="M8.57031 17.8724C8.57031 13.5199 14.3736 10.1503 13.0632 5.14258C16.1521 5.14258 22.049 9.63546 22.049 17.8724C22.049 19.6598 21.3389 21.374 20.0751 22.6378C18.8112 23.9017 17.097 24.6117 15.3096 24.6117C13.5223 24.6117 11.8081 23.9017 10.5442 22.6378C9.28035 21.374 8.57031 19.6598 8.57031 17.8724Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.305 20.1194C18.305 22.8203 16.8073 23.8635 15.3097 23.8635C13.8121 23.8635 12.3145 22.8203 12.3145 20.1194C12.3145 17.4185 14.1865 16.0945 13.8121 14.1289C15.7777 14.1289 18.305 17.4185 18.305 20.1194Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2480" x="-4" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2480"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2480" result="shape"/>
        </filter>
        </defs>
        </svg>
    )
}

export default PopularSvg;