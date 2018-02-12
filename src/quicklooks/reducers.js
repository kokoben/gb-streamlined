import {
  QUICKLOOK_VIDEO_SET_SUCCESS,
  QUICKLOOK_VIDEO_SET_FAIL
} from './actions';

export const quicklookVideo = (state=null, action) => {
  switch(action.type) {
    case QUICKLOOK_VIDEO_SET_SUCCESS:
      console.log('quicklook_video_set_success!');
      const videoLink = action.response.results[0];
      return videoLink;
    case QUICKLOOK_VIDEO_SET_FAIL:
      console.log('quicklook_video_set_fail!');
      console.log(action.message);
    default:
      return state;
  }
}
