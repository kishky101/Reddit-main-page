import React from "react";
import CircleArrow from '../../assets/images/circle_down_ outline.svg'
import Comments from '../../assets/images/comments.svg'
import Share from '../../assets/images/share.svg'
import Save from '../../assets/images/save.svg'
import More from '../../assets/images/more-fade.svg'

import './new-posts.styles.scss'

type NewPostsProps = {
    profile_image: string;
    profile_name: string;
    vote_count: number;
    post_time: number;
    post_text: string;
    post_image?: string;
    comments: number;
}

const NewPosts:React.FC<NewPostsProps> = ({ profile_image, profile_name, vote_count, post_time, post_text, post_image, comments}) => {
    return (
        <div className="new-posts">
            <div className="new-posts__arrows">
                <img src={CircleArrow} className="new-posts__arrow new-posts__arrow--up" />
                <p className="new-posts__vote">{vote_count}</p>
                <img src={CircleArrow} className="new-posts__arrow new-posts__arrow--down" />
            </div>
            <div className="new-posts__main">
                <div className="new-posts__header">
                    <div className="new-posts__profile-img">
                        <img src={profile_image} alt="video game profile" />
                        <p>{profile_name}</p>
                    </div>
                    <p className="new-posts__post-time">{post_time} minutes ago</p>
                </div>
                <div className="new-posts__body">
                    <p className="new-posts__text">{post_text}</p>
                    {post_image && <div className="new-posts__image">
                        <img src={post_image} alt={profile_name} />
                    </div>}
                </div>
                <div className="new-posts__footer">
                    <div className="new-posts__reactions">
                        <div className="new-posts__reaction">
                            <img src={Comments} alt="comments" />
                            <p>{comments} Comments</p>
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