import { stateType, actionType, authActionsType } from './types';

// Check from local storage
let user;
let token;

export const loginActions: authActionsType = {
  REQUEST_LOGIN: "request_login",
  LOGIN_SUCCESS: "login_success",
  LOGIN_ERROR: "login_error",
  LOGOUT: "logout",
};

export const initialState: stateType = {
  user: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case loginActions.REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      } 
    case loginActions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      }
    case loginActions.LOGOUT:
      return {
        ...state,
        user: "",
        token: "",
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
