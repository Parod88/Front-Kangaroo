import {
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  ADVERT_LOADED_REQUEST,
  ADVERT_LOADED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE
} from '../types/';

const defaultState = {
  auth: {
    logged: true,
    forgotPass: {
      isForgotten: false,
      data: null
    },
    resetPass: false
  },
  adverts: {
    loaded: false,
    data: []
  },
  ui: {
    isLoading: false,
    error: null
  }
};

export function auth(authState = defaultState.auth, action) {
  switch (action.type) {
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...authState,
        logged: false,
        forgotPass: { isForgotten: true, data: action.payload }
      };

    default:
      return authState;
  }
}

export function adverts(advertsState = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { ...advertsState, loaded: true, data: action.payload.data.results };
    case ADVERT_LOADED_SUCCESS:
      return { ...advertsState, data: [...advertsState.data, action.payload.data.results] };
    default:
      return advertsState;
  }
}

export function ui(uiState = defaultState.ui, action) {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
    case ADVERTS_LOADED_REQUEST:
    case ADVERT_LOADED_REQUEST:
      return { ...uiState, isLoading: true, error: null };
    case FORGET_PASSWORD_SUCCESS:
    case ADVERTS_LOADED_SUCCESS:
    case ADVERT_LOADED_SUCCESS:
      return { ...uiState, isLoading: false, error: null };
    case FORGET_PASSWORD_FAILURE:
    case ADVERTS_LOADED_FAILURE:
    case ADVERT_LOADED_FAILURE:
      return { ...uiState, isLoading: false, error: action.payload };
    default:
      return uiState;
  }
}
