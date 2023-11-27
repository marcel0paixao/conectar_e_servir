import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";
import React from "react";
import { User, login } from "../src/services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthContextData {
    logged: boolean;
    user: {
        id: number;
        username: string;
        email: string;
    } | null;
    handleLogin(email: string, password: string, setLoginError: Dispatch<SetStateAction<string | null>>): Promise<void>
    logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<{ id: number; username: string; email: string; } | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const user = await AsyncStorage.getItem('auth:user')      
      if (user) setUser(JSON.parse(user));
    }
    loadStorageData();
  }, [])
  

  async function handleLogin(email: string, password: string, setLoginError: Dispatch<SetStateAction<string | null>>) {
    if (!email || !password) {
      setLoginError('Por favor, insira email e senha.');
      return;
    }
    login(email, password).then(async response => {
      if (!response) setLoginError('Credenciais inválidas.');
      else {
        const resp = response as unknown as User;
        const user = {
          id: resp.id,
          email: resp.email,
          username: resp.username
        };
        setUser(user);
        await AsyncStorage.setItem('auth:user', JSON.stringify(user));
      }
    }).catch(e => {
      console.log(e);
      
      setLoginError('A requisição falhou, verifique sua conexão.')
    });
  }

  const logout = () => AsyncStorage.clear().then(() => setUser(null))

  return (
      <AuthContext.Provider value={{ logged: !!user, user, handleLogin, logout }}>
          {children}
      </AuthContext.Provider>
  );    
}
export default AuthContext;