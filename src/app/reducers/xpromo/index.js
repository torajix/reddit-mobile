/**
 * Applink generated by Server
 */
import merge from 'platform/merge';
import * as xpromoActions from 'app/actions/xpromo';

export const DEFAULT = {
  appLink: undefined
};

const server = function(state=DEFAULT, action={}) {
  switch (action.type) {
    case xpromoActions.XPROMO_LINK_SET: {
      return merge(state, {
        appLink: action.payload.appLink,
      });
      return state;
    }
    default: return state;
  }
}


/**
 * @module {function} xpromo
 * @memberof app/reducers
 *
 * This reducer managers all of the xpromo related state of the application.
 * It can be thought of as the `root` reducer for xpromo; combines interstitials
 * and listingClick reducers that manage their own specific xpromo state.
 */
import { combineReducers } from 'redux';

import interstitials from './interstitials';
import listingClick from './listingClick';
import persistent from './persistent';

export default combineReducers({
  server,

  interstitials,
  listingClick,
  persistent,
});