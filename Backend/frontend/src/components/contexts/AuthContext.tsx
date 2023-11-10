import { ReactNode, createContext, useEffect, useState } from "react";
import { IAuthContextType } from "../../interfaces/IAuthContextType";
import { useContext } from "react";
import { IUser } from "../../interfaces/IUser";
import { ReadCookie } from "../functions/ReadCookie";

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
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    const token = ReadCookie("token");
    if (token) {
      setUser({
        id: 1,
        username: "Иван Иванов",
        password: "123",
        token: "123",
        phone: "89999999999",
        email: "test@testmail.ru",
      });
    }
  };
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
