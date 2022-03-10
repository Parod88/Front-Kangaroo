import { ADVERTS_LOADED_REQUEST, ADVERTS_LOADED_SUCCESS, ADVERTS_LOADED_FAILURE } from '../types';
import { areAdvertsLoaded } from '../selectors/selectors';

export function advertsLoadedRequest() {
  return {
    type: ADVERTS_LOADED_REQUEST
  };
}

export function advertsLoadedSuccess(adverts) {
  return {
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts
  };
}

export function advertsLoadedFailure(error) {
  return {
    type: ADVERTS_LOADED_FAILURE,
    error: true,
    payload: error
  };
}

export function loadAdverts() {
  return async function (dispatch, getState, { api }) {
    if (areAdvertsLoaded(getState())) {
      return;
    }
    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getLatestAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
}

export function loadPaginatedAdverts() {
  return async function (dispatch, getState, { api }) {
    if (areAdvertsLoaded(getState())) {
      return;
    }
    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getLatestPaginatedAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
}
