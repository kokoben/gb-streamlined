import React, { Component } from 'react';
import Videos from '../../components/videos';
import { connect } from 'react-redux';

class PodcastVideos extends Component {
  render () {
    return (
      <Videos />
    )
  }
}

export default connect()(PodcastVideos);
