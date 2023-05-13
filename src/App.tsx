import React from 'react';
import NewPosts from './global-components/new-posts/new-posts.component';
//import TrendingPost from './global-components/trending-post/trending-post.component';
//import Button from './global-components/button/button.component';
//import SearchBar from './global-components/search-bar/search-bar.component';
import PostNav from './global-components/post-nav/post-nav.component';
const App: React.FC = () => {
  return (
    <div>
      <h1>Reddit Page</h1>
      <NewPosts />
      {/* {<TrendingPost />} */}
      {/* {<Button />} */}
      {/* {<SearchBar />} */}
      <PostNav />
    </div>
  )
};

export default App;