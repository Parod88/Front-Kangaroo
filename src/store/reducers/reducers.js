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
  LOGOUT_USER,
  USER_SIGNUP_SUCCESS,
  CATEGORY_LOAD_REQUEST,
  CATEGORY_LOAD_SUCCESS,
  CATEGORY_LOAD_FAILURE,
  TAGS_LOADED_FAILURE,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_REQUEST
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
    },
    user: {
      data: []
    }
  },
  adverts: {
    loaded: false,
    data: []
  },
  categories: [],
  tags: [],
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
      return {
        ...authState,
        logged: true
      };
    case LOGOUT_USER:
      return {
        ...authState,
        logged: false
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...authState,
        data: action.payload
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...authState,
        user: { data: action.payload }
      };
    default:
      return authState;
  }
}

export function adverts(advertsState = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { ...advertsState, loaded: true, data: action.payload.results };

    case ADVERT_LOADED_SUCCESS:
      return { ...advertsState, data: [...advertsState.data, action.payload.data.results] };
    default:
      return advertsState;
  }
}

export function categories(categoriesState = defaultState.categories, action) {
  switch (action.type) {
    case CATEGORY_LOAD_SUCCESS:
      return action.payload.results;
    default:
      return categoriesState;
  }
}

export function tags(tagsState = defaultState.tags, action) {
  switch (action.type) {
    case TAGS_LOADED_SUCCESS:
      return action.payload;
    default:
      return tagsState;
  }
}


export function ui(uiState = defaultState.ui, action) {
  switch (action.type) {
    case LOGIN_START:
    case RESET_PASSWORD_REQUEST:
    case FORGET_PASSWORD_REQUEST:
    case ADVERTS_LOADED_REQUEST:
    case ADVERT_LOADED_REQUEST:
    case CATEGORY_LOAD_REQUEST:
      return { ...uiState, isLoading: true, error: null };
    case LOGIN_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case FORGET_PASSWORD_SUCCESS:
    case ADVERTS_LOADED_SUCCESS:
    case ADVERT_LOADED_SUCCESS:
    case CATEGORY_LOAD_SUCCESS:
    case TAGS_LOADED_SUCCESS:
      return { ...uiState, isLoading: false, error: null };
    case LOGIN_FAILURE:
    case RESET_PASSWORD_FAILURE:
    case FORGET_PASSWORD_FAILURE:
    case ADVERTS_LOADED_FAILURE:
    case ADVERT_LOADED_FAILURE:
    case CATEGORY_LOAD_FAILURE:
    case TAGS_LOADED_FAILURE:
      return { ...uiState, isLoading: false, error: action.payload };
    default:
      return uiState;
  }
}
