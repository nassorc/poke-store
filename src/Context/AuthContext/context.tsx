import { useContext, createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
// Context will contain the authentication token and user details
const AuthStateContext = createContext({});
// Context will contain the dispatch method given by useReducer
const AuthDispatchContext = createContext({});

// Custon hooks to help read Context values.
export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }: {children: JSX.Element}) => {
  const [user, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
