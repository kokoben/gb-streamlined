import * as sharedActions from './types';

export const setSearchSpinner = on => ({
  type: sharedActions.SEARCH_SPINNER_SET,
  on,
});

export const setSearchPage = page => ({
  type: sharedActions.SEARCH_PAGE_SET,
  page,
});

