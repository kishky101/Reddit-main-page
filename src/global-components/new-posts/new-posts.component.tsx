import React from "react";
import CircleArrow from '../../assets/images/circle_down_ outline.svg'
import Hogwarts from '../../assets/images/hogwarts_legacy.png'
import VideoGames from '../../assets/images/videogames.png'
import Comments from '../../assets/images/comments.svg'
import Share from '../../assets/images/share.svg'
import Save from '../../assets/images/save.svg'
import More from '../../assets/images/more-fade.svg'

import './new-posts.styles.scss'

const NewPosts:React.FC = () => {
    return (
        <div className="new-posts">
            <div className="new-posts__arrows">
                <img src={CircleArrow} className="new-posts__arrow new-posts__arrow--up" />
                <p className="new-posts__vote">10</p>
                <img src={CircleArrow} className="new-posts__arrow new-posts__arrow--down" />
            </div>
            <div className="new-posts__main">
                <div className="new-posts__header">
                    <div className="new-posts__profile-img">
                        <img src={VideoGames} alt="video game profile" />
                        <p>VideoGames</p>
                    </div>
                    <p className="new-posts__post-time">5 minutes ago</p>
                </div>
                <div className="new-posts__body">
                    <p className="new-posts__text">What do you think about the new game based on the Harry Potter books and movies?</p>
                    <div className="new-posts__image">
                        <img src={Hogwarts} alt="hogwarts" />
                    </div>
                </div>
                <div className="new-posts__footer">
                    <div className="new-posts__reactions">
                        <div className="new-posts__reaction">
                            <img src={Comments} alt="comments" />
                            <p>3 Comments</p>
                        </div>
                        <div className="new-posts__reaction">
                            <img src={Share} alt="share" />
                            <p>Share</p>
                        </div>
                        <div className="new-posts__reaction">
                            <img src={Save} alt="save" />
                            <p>Save</p>
                        </div>
                    </div>
                    <div className="new-posts__more">
                        <img src={More} alt="more" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPosts