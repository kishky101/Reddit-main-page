import React from "react";

import './button.styles.scss'

const Button:React.FC = () => {

    return (
        <div className="button-wrapper">
            <button className="button-wrapper__button button-wrapper__button--register">Register</button>
        </div>
    )
}

export default Button