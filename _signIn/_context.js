import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useSession() {
  return useContext(AuthContext);
}

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        signIn: () => setSession("mySession"),
        signOut: () => setSession(null),
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
