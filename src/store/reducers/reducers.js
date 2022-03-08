import { ADVERTS_LOADED_REQUEST, ADVERTS_LOADED_SUCCESS, ADVERTS_LOADED_FAILURE } from '../types/';

const defaultState = {
  adverts: {
    loaded: false,
    data: []
  },
  ui: {
    isLoading: false,
    error: null
  }
};

export function adverts(advertsState = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return { ...advertsState, loaded: true, data: action.payload.data.advertisementsList };
    default:
      return advertsState;
  }
}

export function ui(uiState = defaultState.ui, action) {
  switch (action.type) {
    case ADVERTS_LOADED_REQUEST:
      return { ...uiState, isLoading: true, error: null };
    case ADVERTS_LOADED_SUCCESS:
      return { ...uiState, isLoading: false, error: null };
    case ADVERTS_LOADED_FAILURE:
      return { ...uiState, isLoading: false, error: action.payload };
    default:
      return uiState;
  }
}
