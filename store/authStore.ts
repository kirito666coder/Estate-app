import { User } from "@/types/auth";
import { getToken, removeToken, saveToken } from "@/utils/storage";
import { create } from "zustand";


interface AuthState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;

    login: (user: User,token: string) => void;
    logout: () => void;
    restoreSession: () => Promise<void>
    setLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set)=>({
    user:null,
    token: null,
    isLoggedIn: false,
    isLoading: true,

    login: async (user,token)=>{
        await saveToken(token);
        set({
            user,
            token,
            isLoggedIn: true,
            isLoading:false
        })
    },

    logout: async () => {
        await removeToken();
        set({
            user: null,
            token: null,
            isLoading: false,
            isLoggedIn: false
        })
    },
    restoreSession : async ()=>{
        try {
            const token = await getToken();

            if(token){
                set({
                    token,
                    isLoggedIn:true,
                    isLoading: false,
                })
            }else{
                set({
                    isLoading: false,
                })
            }
        } catch (error) {
            set({
                isLoading: false,
            })
        }
    },

    setLoading: (value) => set({
        isLoading: value,
    })

}))