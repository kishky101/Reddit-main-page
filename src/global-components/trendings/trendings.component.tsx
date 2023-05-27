import React from "react";
import TrendingPost from "../trending-post/trending-post.component";
import Car from '../../assets/images/formula1.png'
import Formula1 from '../../assets/images/car.png'
import minecraft from '../../assets/images/minecraft.png'
import mario from '../../assets/images/mario.png'
import girl from '../../assets/images/girl.png'
import nba from '../../assets/images/nba.png'
import lakers from '../../assets/images/lakers.png'

import './trendings.styles.scss'


const Trendings: React.FC = () => {
    return (
        <div className="trendings">
            <div className="trendings__topic">
                <h2>Trending today</h2>
            </div>
            <div className="trendings__posts">
                <TrendingPost 
                    profile_img={Car}
                    post_img={Formula1}
                    post_heading={"2023 MoneyGram Haas VF-23 Livery"}
                    post_text={"Meet the new painting from the formula"}
                    profile_name={"Formula1"} 
                />
                <TrendingPost
                    profile_img={minecraft}
                    post_img={mario}
                    post_heading={"What would you add to minecraft?"}
                    post_text={"If there was one thing you could add to Minecraft what would it be?"}
                    profile_name={"Minecraft1234"}
                />
                <TrendingPost
                    post_img={girl}
                    post_heading={"Miley Cyrus looks different"}
                    post_text={"Miley looks like a mix of Cher, Dolly Parton, and Kim Kardashian"}
                    profile_name={"Lola"}
                />
                <TrendingPost
                    profile_img={lakers}
                    post_img={nba}
                    post_heading={"LeBron James is less than 100 POINTS"}
                    post_text={"Kareem Abdul-Jabbar is the all-time leading scorer in the NBA"}
                    profile_name={"NBA"}
                />
            </div>
        </div>
    )
}

export default Trendings;