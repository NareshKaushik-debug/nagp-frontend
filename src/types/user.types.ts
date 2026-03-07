// User related types
export interface User {
  id: number | string;
  name: string;
  email: string;
  created_at?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface UpdateProfileData {
  name?: string;
}
