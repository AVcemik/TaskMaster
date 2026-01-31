import { create } from "zustand";



interface AuthState {
    token: string | null;
    isHydrated: boolean;

    login: (token: string) => void;
    logout: () => void;
    hydrate: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isHydrated: false,

    login: (token) => set({token}),
    logout: () => set({token: null}),

    hydrate: async () => {
        set({isHydrated: true});
    }
}));