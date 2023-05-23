import React from 'react';
//import NewPosts from './global-components/new-posts/new-posts.component';
//import TrendingPost from './global-components/trending-post/trending-post.component';
//import Button from './global-components/button/button.component';
//import SearchBar from './global-components/search-bar/search-bar.component';
//import PostNav from './global-components/post-nav/post-nav.component';
import TopNav from './global-components/top-nav/top-nav.component';
//import NavList from './global-components/nav-list/nav-list.component';
// import SideNav from './global-components/side-nav/side-nav.component';
// import RightNav from './global-components/right-nav/right-nav.component';
// import Posts from './global-components/posts/posts.component';
//import Trendings from './global-components/trendings/trendings.component';
import MainLayout from './global-components/main-layout/main-layout.component';
//import Hambuger from './global-components/hambuger/hambuger.component';

const App: React.FC = () => {

  //const [open, setOpen] = React.useState(false);



  return (
    <div>
      {/* <h1>Reddit Page</h1> */}
      {/* <NewPosts /> */}
      {/* {<TrendingPost />} */}
      {/* {<Button />} */}
      {/* {<SearchBar />} */}
      {/* {<PostNav />} */}
      <TopNav />
      <MainLayout />
      {/* <NavList /> */}
      {/* <SideNav />
      <RightNav />
      <Posts />
      <Trendings /> */}
    </div>
  )
};

export default App;
