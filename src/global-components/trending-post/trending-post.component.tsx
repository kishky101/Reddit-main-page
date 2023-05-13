import React from "react";
import Car from '../../assets/images/formula1.png'
import Formula1 from '../../assets/images/car.png'

import './trending-post.styles.scss'

const TrendingPost:React.FC = () => {

    return (
        <div className="trending-post" style={{backgroundImage: `url(${Formula1})`}}>
            <div className="trending-post__header">
                    <img src={Car} alt="" />
                    <p>Formula1</p>
            </div>
            <div className="trending-post__body">
                <h3>2023 MoneyGram Haas VF-23 Livery</h3>
                <p>Meet the new painting from the formula</p>
            </div>
        </div>
    )
}

export default TrendingPost;