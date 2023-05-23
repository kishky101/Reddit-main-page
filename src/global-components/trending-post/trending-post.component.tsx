import React from "react";
//import Car from '../../assets/images/formula1.png'
//import Formula1 from '../../assets/images/car.png'
import black from '../../assets/images/black.png'

import './trending-post.styles.scss'

type TrendingPostProps = {
    profile_img?: string;
    profile_name: string;
    post_heading: string;
    post_img: string;
    post_text: string;
}

const TrendingPost:React.FC<TrendingPostProps> = ({profile_img = black, profile_name, post_img, post_heading, post_text }) => {

    return (
        <div className="trending-post" style={{backgroundImage: `url(${post_img})`}}>
            <div className="trending-post__header">
                    <img src={profile_img} alt="" />
                    <p>{profile_name}</p>
            </div>
            <div className="trending-post__body">
                <h3>{post_heading}</h3>
                <p>{post_text}</p>
            </div>
        </div>
    )
}

export default TrendingPost;