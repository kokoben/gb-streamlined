import apiKey from '../api-keys';

// return list of all bombcast videos by publish date in descending order
/* eslint-disable import/prefer-default-export, quotes */
export const requestBombcastVideos = page => ([
  `https://www.giantbomb.com/api/videos/?api_key=${apiKey}`,
  `&format=jsonp&json_callback=callback&limit=24&offset=${(page - 1) * 24}`,
  `&field_list=hd_url,name,id,deck,embed_player,publish_date,image,video_type,user`,
  `&filter=video_type:23&sort=publish_date:desc`,
].join(''));
/* eslint-enable */
