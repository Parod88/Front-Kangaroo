import {
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  ADVERT_LOADED_REQUEST,
  ADVERT_LOADED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER
} from '../types/';

const defaultState = {
  auth: {
    logged: false,
    forgotPass: {
      isForgotten: false,
      data: null
    },
    resetPass: {
      data: null
    }
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
        forgotPass: { isForgotten: true, data: action.payload.config.data }
      };
    case LOGIN_SUCCESS:
      return{
        ...authState,
        logged:true
      }
    case LOGOUT_USER:
      return{
        ...authState,
        logged:false
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...authState,
        data: action.payload
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
    case RESET_PASSWORD_REQUEST:
    case FORGET_PASSWORD_REQUEST:
    case ADVERTS_LOADED_REQUEST:
    case ADVERT_LOADED_REQUEST:
    case LOGIN_START:
      return { ...uiState, isLoading: true, error: null };
    case RESET_PASSWORD_SUCCESS:
    case FORGET_PASSWORD_SUCCESS:
    case ADVERTS_LOADED_SUCCESS:
    case ADVERT_LOADED_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...uiState, isLoading: false, error: null };
    case RESET_PASSWORD_FAILURE:
    case FORGET_PASSWORD_FAILURE:
    case ADVERTS_LOADED_FAILURE:
    case ADVERT_LOADED_FAILURE:
    case LOGIN_FAILURE:
      return { ...uiState, isLoading: false, error: action.payload };
    default:
      return uiState;
  }
}
