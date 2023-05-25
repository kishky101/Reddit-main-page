import React from "react";
import Popular from '../../assets/images/popular-grey.svg'
import Arrow from '../../assets/images/arrow-down-grey.svg'
import More from '../../assets/images/more-fade.svg'


import './post-nav2.styles.scss'

const PostNav2:React.FC = () => {
    return (
        <div className="post-nav2">
            <h2 className="post-nav2__title">Popular</h2>
            <div className="post-nav2__nav">  
                <div className="post-nav2__headings">
                    <div className="post-nav2__first-sections">
                        <div className="post-nav2__first-section post-nav2__first-section--1">
                            <img src={Popular} alt="" />
                            <p>Popular</p>
                            <img src={Arrow} alt='arrow' />
                        </div>
                    </div> 
                </div>
                <div className="post-nav2__more">
                    <img src={More} alt="more" />
                    <img src={Arrow} alt='arrow' />
                </div>
            </div>
        </div>
    )
}

export default PostNav2;