import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, LoginData, RegisterData, AuthResponse } from '../types/user.types';
import { authApi } from '../api/auth.api';
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from '../utils/storage';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = getAccessToken();
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (data: LoginData) => {
    try {
      const response: AuthResponse = await authApi.login(data);
      setUser(response.user);
      setToken(response.tokens.accessToken);
      
      // Store in localStorage
      setTokens(response.tokens.accessToken, response.tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.user));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response: AuthResponse = await authApi.register(data);
      setUser(response.user);
      setToken(response.tokens.accessToken);
      
      // Store in localStorage
      setTokens(response.tokens.accessToken, response.tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.user));
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    clearTokens();
    localStorage.removeItem('user');
    
    // Call logout API (optional, for token invalidation)
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      authApi.logout(refreshToken).catch(console.error);
    }
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!user && !!token,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
