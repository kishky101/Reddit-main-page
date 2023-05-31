import React from 'react';
import TopNav from './global-components/top-nav/top-nav.component';
import MainLayout from './global-components/main-layout/main-layout.component';
import CircleArrow from './global-components/helper/circle-arrow.component';

const App: React.FC = () => {

  return (
    <div>
      <TopNav />
      <MainLayout />
    </div>
  )
};

export default App;
