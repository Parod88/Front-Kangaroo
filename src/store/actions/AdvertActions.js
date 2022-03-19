import {
  ADVERT_CREATE_FAILURE,
  ADVERT_CREATE_REQUEST,
  ADVERT_CREATE_SUCCESS,
  ADVERT_DELETE_FAILURE,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_SUCCESS,
  ADVERT_UPDATE_FAILURE,
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_SUCCESS
} from '../types/AdvertTypes';

//===================================================================
//Create
//===================================================================
export function advertCreateRequest() {
  return {
    type: ADVERT_CREATE_REQUEST
  };
}

export function advertCreateSuccess(advert) {
  return {
    type: ADVERT_CREATE_SUCCESS,
    payload: advert
  };
}

export function advertCreateFailure(error) {
  return {
    type: ADVERT_CREATE_FAILURE,
    error: true,
    payload: error
  };
}

export function createAdvert(advert) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertCreateRequest());
    try {
      const advertCreate = await api.adverts.createAdvert(advert);
      dispatch(advertCreateSuccess(advertCreate));
    } catch (error) {
      dispatch(advertCreateFailure(error));
    }
  };
}

//===================================================================
//Update
//===================================================================
export function advertUpdateRequest() {
  return {
    type: ADVERT_UPDATE_REQUEST
  };
}

export function advertUpdateSuccess(advert) {
  return {
    type: ADVERT_UPDATE_SUCCESS,
    payload: advert
  };
}

export function advertUpdateFailure(error) {
  return {
    type: ADVERT_UPDATE_FAILURE,
    error: true,
    payload: error
  };
}

export function updateAdvert(advert) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertCreateRequest());
    try {
      const advertUpdate = await api.updateAdvert(advert);
      dispatch(advertCreateSuccess(advertUpdate));
    } catch (error) {
      dispatch(advertCreateFailure(error));
    }
  };
}

//===================================================================
//Delete
//===================================================================
export function advertDeleteRequest() {
  return {
    type: ADVERT_DELETE_REQUEST
  };
}

export function advertDeleteSuccess(advertId) {
  return {
    type: ADVERT_DELETE_SUCCESS,
    payload: advertId
  };
}

export function advertDeleteFailure(error) {
  return {
    type: ADVERT_DELETE_FAILURE,
    error: true,
    payload: error
  };
}

export function deleteAdvert(advertId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertDeleteRequest());
    try {
      const advert = await api.deleteAdvert(advertId);
      dispatch(advertDeleteSuccess(advert));
      history.push(`/adverts`);
    } catch (error) {
      dispatch(advertDeleteFailure(error));
    }
  };
}
