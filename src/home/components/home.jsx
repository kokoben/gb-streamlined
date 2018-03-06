import React from 'react';
import CurrentHomeVideo from '../containers/current-home-video';
import HomeVideos from '../containers/home-videos';
import HomeFeedHeader from '../containers/home-feedheader';

export default () => (
  <div>
    <CurrentHomeVideo />
    <HomeFeedHeader />
    <HomeVideos />
  </div>
);
