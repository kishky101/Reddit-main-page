import React from "react";
import NewPosts from "../new-posts/new-posts.component";
import hogwarts from "../../assets/images/hogwarts_legacy.png"
import videogames from "../../assets/images/videogames.png"
import green from "../../assets/images/green.png"
import movie from "../../assets/images/movie.png"
import shrek from "../../assets/images/shrek.png"

// type NewPostsProps = {
//     profile_image: string;
//     profile_name: string;
//     vote_count: number;
//     post_time: number;
//     post_text: string;
//     post_image?: string;
//     comments: number;
// }

const Posts = () => {
    return (
        <div>
           <NewPosts 
                profile_image={videogames}
                profile_name={"VideoGames"}
                vote_count={10}
                post_time={5}
                post_text={"What do you think about the new game based on the Harry Potter books and movies?"}
                post_image={hogwarts}
                comments={3}
           />
           <NewPosts
                profile_image={green}
                profile_name={"Green"}
                vote_count={2}
                post_time={7}
                post_text={"A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?"}
                //post_image={hogwarts}
                comments={1}
           />
           <NewPosts
                profile_image={movie}
                profile_name={"Movie"}
                vote_count={33}
                post_time={25}
                post_text={"What's your favorite shrek movie?"}
                post_image={shrek}
                comments={3}
           />
        </div>
    )
}

export default Posts;