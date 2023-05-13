import React from "react";
import Popular from '../../assets/images/popular-blue.svg'
import Arrow from '../../assets/images/arrow-down-blue.svg'
import CircleTop from '../../assets/images/circle-up.svg'
import CircleMark from '../../assets/images/circle-mark.svg'
import More from '../../assets/images/more-fade.svg'


import './post-nav.styles.scss'

const PostNav:React.FC = () => {
    return (
        <div className="post-nav">
            <div className="post-nav__headings">
                <div className="post-nav__first-sections">
                    <div className="post-nav__first-section post-nav__first-section--1">
                        <img src={Popular} alt="" />
                        <p>Popular</p>
                    </div>
                    <div className="post-nav__first-section post-nav__first-section--2">
                       <p>Poland</p> 
                       <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="post-nav__second-sections">
                    <div className="post-nav__second-section">
                        <img src={CircleMark} alt="circle-mark" />
                        <p>New</p>
                    </div>
                    <div className="post-nav__second-section">
                        <img src={CircleTop} alt="circle-arrow" />
                        <p>Top</p>
                    </div>
                </div>
            </div>
            <div className="post-nav__more">
                <img src={More} alt="more" />
            </div>
        </div>
    )
}

export default PostNav