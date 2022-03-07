import {
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE
} from '../types/AdvertsListTypes';

export const defaultState = {
  adverts: {
    loaded: false,
    data: []
  }
};

export function adverts(advertsState = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { ...advertsState, data: [...advertsState.data, action.payload] };
    default:
      return advertsState;
  }
}
