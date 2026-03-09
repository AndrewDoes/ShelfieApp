import { createContext, ReactNode, useState } from "react";

interface User {
    id: string,
    email: string
}

interface UserContextType {
    user: User | null
    login: (data: LoginParams) => Promise<void>
    register: (data: LoginParams) => Promise<void>
    logout: () => Promise<void>
}

interface LoginParams {
    email: string
    password: string
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    async function login({ email, password }: LoginParams) {

    }

    async function register({ email, password }: LoginParams) {

    }


    async function logout() {

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}
