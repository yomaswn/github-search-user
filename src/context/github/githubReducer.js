import {
  SEARCH_USERS,
  CLEAR_USERS,
  INIT_USERS,
  GET_USER,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case INIT_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
