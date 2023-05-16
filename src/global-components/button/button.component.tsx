import React from "react";

import './button.styles.scss'

type ButtonProps = {
    buttonType?: string;

} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button:React.FC<ButtonProps> = ({ buttonType , children}) => {

    return (
        <div className="button-wrapper">
            <button className={`button-wrapper__button ${buttonType === 'register'? 'button-wrapper__button--register': ''}`}>{children}</button>
        </div>
    )
}

export default Button
