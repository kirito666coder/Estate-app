import { User } from "@/types/auth";
import { create } from "zustand";


interface AuthState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;

    login: (user: User,token: string) => void;
    logout: () => void;
    setLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set)=>({
    user:null,
    token: null,
    isLoggedIn: false,
    isLoading: false,

    login: (user,token)=>set({
        user,
        token,
        isLoggedIn: true,
        isLoading:false
    }),

    logout: () => set({
        user: null,
        token: null,
        isLoading: false,
        isLoggedIn: false
    }),

    setLoading: (value) => set({
        isLoading: value,
    })

}))