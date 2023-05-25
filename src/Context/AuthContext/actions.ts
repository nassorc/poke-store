// File contains core actions related to authentication
import React from 'react';
import { authActionsType, actionType } from './types';

const BASE_URL = "http://localhost:3002/api/sessions";

export async function loginUser(dispatch: React.Dispatch<actionType> , actions: authActionsType, loginPayload: {email: string, password: string}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: actions.REQUEST_LOGIN, payload: {} });
    const res = await fetch(BASE_URL, requestOptions);
    const data = await res.json();
    console.log(data.accessToken)
    dispatch({ type: actions.LOGIN_SUCCESS, payload: {token : data.accessToken}})
    return data;
  }
  catch(error: any) {
    console.log(error.message)
    dispatch({ type: actions.LOGIN_SUCCESS, payload: {message: error.message}})
  }
}

export function logoutUser(dispatch: React.Dispatch<actionType>, actions: authActionsType) {
  dispatch({ type: actions.LOGOUT });
  // remove from local storage
}
