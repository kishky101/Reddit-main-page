import React, { useContext } from "react";
import SideNav from "../side-nav/side-nav.component";
import Trendings from "../trendings/trendings.component";
import PostNav from "../post-nav/post-nav.component";
import Posts from "../posts/posts.component";
import RightNav from "../right-nav/right-nav.component";
import { HamburgerContext } from "@/context/hambuger.context";
import './main-layout.styles.scss'

const MainLayout = () => {

    const {isOpen} = useContext(HamburgerContext);

    return (
        <main className="main-layout">
            <div className={`main-layout__aside ${isOpen? "main-layout__aside--show": ""}`}>
                <SideNav />
            </div>
            <div className="main-layout__scroll">
                <div className="main-layout__trends">
                        <Trendings />
                </div>
                <h2 className="main-layout__title">Popular post</h2>
                <div className="main-layout__mains">
                    
                    <div className="main-layout__posts">
                        <PostNav />
                        <Posts />
                    </div>
                    <div className="main-layout__right">
                        <RightNav />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default MainLayout;