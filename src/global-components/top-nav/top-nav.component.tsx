import React from "react";
import SearchBar from "../search-bar/search-bar.component";
import Button from "../button/button.component";

import './top-nav.styles.scss'

const TopNav = () => {
    return (
        <header className="top-nav">
            <div className="top-nav__logo">
                <h1>reddit</h1>
            </div>
            <div className="top-nav__widgets">
                <div className="top-nav__search">
                    <SearchBar />
                </div>
                <div className="top-nav__buttons">
                    <Button>Log in</Button>
                    <Button buttonType="register">Register</Button>
                </div>
            </div>
        </header>
    )
}

export default TopNav;