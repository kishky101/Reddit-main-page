import React from "react";
import NavList from "../nav-list/nav-list.component";
import popular from '../../assets/images/popular.svg'
import settings from '../../assets/images/settings.svg'
import download from '../../assets/images/download.svg'
import gaming from '../../assets/images/gaming.svg'
import sports from '../../assets/images/sports.svg'
import bussiness from '../../assets/images/business.svg'
import crypto from '../../assets/images/crypto.svg'
import television from '../../assets/images/television.svg'
import celebrity from '../../assets/images/celebrity.svg'
import more from '../../assets/images/more.svg'

import './side-nav.styles.scss'

const SideNav = () => {
    return (
        <nav className="side-nav">
            <div className="side-nav__group">
                <div className="side-nav__feeds">
                    <h5>FEEDS</h5>
                    <div className="side-nav__feed-type">
                        <img src={popular} alt="popular icon" />
                        <p>Popular</p>
                    </div>
                </div>
                <div className="side-nav__topics">
                    <h5>TOPICS</h5>
                    <div className="side-nav__topics-list">
                        <NavList title="Gaming" icon={gaming}/>
                        <NavList title="Sports" icon={sports}/>
                        <NavList title="Business, Economics" icon={bussiness} />
                        <NavList title="Crypto" icon={crypto} />
                        <NavList title="Televison" icon={television}/>
                        <NavList title="Celebrity" icon={celebrity}/>
                        <NavList title="More Topics" icon={more} />
                    </div>
                </div>
            </div>
            <div className="side-nav__footer">
                <NavList title="Settings" icon={settings} />
                <div className="side-nav__download">
                    <img src={download} alt="download" />
                    <p>Get App</p>
                </div>
            </div>
        </nav>
    )
}

export default SideNav;