import React from "react";
import RightNavList from "../right-nav-list/right-nav-list.component";

import './right-nav.styles.scss'

const RightNav: React.FC = () => {
    return (
        <div className="right-nav">
            <div>
                <RightNavList title="Popular Communities" />
                <RightNavList title="Gaming" />
                <RightNavList title="Sports" />
                <RightNavList title="Tv" />
                <RightNavList title="Travel" />
                <RightNavList title="Health & Fitness" />
                <RightNavList title="Fashion" />
            </div>
        </div>
    )
}

export default RightNav;