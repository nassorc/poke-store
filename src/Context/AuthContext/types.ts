export type LoginActions = "request_login" | "login_success" | "login_error" | "logout";

export interface authActionsType {
    REQUEST_LOGIN: LoginActions,
    LOGIN_SUCCESS: LoginActions,
    LOGIN_ERROR: LoginActions,
    LOGOUT: LoginActions,
}
export interface stateType {
    user?: string | object | undefined,
    token?: string | undefined,
    loading?: boolean,
    errorMessage?: string | null,
}

export interface actionType {
    type: LoginActions,
    payload?: any,
}