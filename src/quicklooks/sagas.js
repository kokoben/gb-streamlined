import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}
// workers
function* setQuicklookVideoAsync() {
  try {
    let jsonpArgs = [
        "https://www.giantbomb.com/api/videos/" +
        "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
        "&format=jsonp&json_callback=callback" +
        "&limit=1&field_list=hd_url,name,deck,publish_date,image," +
        "user&filter=video_type:3&sort=publish_date:desc",
        {param: 'json_callback'}
    ];

    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: 'QUICKLOOK_VIDEO_SET_SUCCEEDED', response: response});
  } catch (e) {
    console.log('quicklook_video_set_failed!');
    yield put({type:'QUICKLOOK_VIDEO_SET_FAIL', message: e.message});
  }

}

// watchers
export function* watchSetQuicklookVideo() {
  console.log('redux-saga is running the QUICKLOOK_VIDEO_SET action listener');
  yield takeEvery('QUICKLOOK_VIDEO_SET', setQuicklookVideoAsync);
}
