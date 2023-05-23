import {
  createContext,
  useContext,
  useState,
  useReducer,
  Dispatch,
  SetStateAction,
} from "react";

function useAuth() {
  useContext(AuthContext);
}
interface AuthContextValue {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}
const AuthContext = createContext<AuthContextValue>({
  auth: {},
  dispatch: () => {
    return;
  },
});

const ACTIONS = {
  LOGIN: "login",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      console.log(`User logged in with ${action.payload}`);
  }
}

// a provider is used to encapsulate only the compnenet that needs the data in context
const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, dispatch] = useReducer(reducer, {});
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
export default useAuth;
