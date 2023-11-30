import { ReactNode, createContext, useEffect, useState } from "react";
import { IAuthContextType } from "../../interfaces/IAuthContextType";
import { useContext } from "react";
import { IUser } from "../../interfaces/IUser";
import { useGetMe } from "../../hooks/useGetMe";
import React from "react";

const AuthContext = createContext<IAuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data } = useGetMe();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
