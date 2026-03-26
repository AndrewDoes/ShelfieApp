import { createContext, ReactNode, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";
import { router } from "expo-router";

interface User {
    id: string,
    email: string
}

interface UserContextType {
    user: User | null
    authChecked: boolean
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
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const init = async () => {
            await getInitialUserValue();
        };

        init();
    }, []);

    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser({
                id: response.$id,
                email: response.email
            });
            router.replace('/(dashboard)/profile');
        } catch (error) {
            setUser(null);
        } finally {
            setAuthChecked(true);
        }
    }

    async function login({ email, password }: LoginParams) {
        try {
            // Delete existing session if any to avoid conflicts
            try {
                await logout();
            } catch (e) {
                // Ignore if no session exists
            }

            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser({
                id: response.$id,
                email: response.email
            });
        } catch (error: any) {
            throw Error(error.message);
        }
    }

    async function register({ email, password }: LoginParams) {
        try {
            await account.create(ID.unique(), email, password);
        } catch (error: any) {
            throw Error(error.message);
        }
    }


    async function logout() {
        try {
            await account.deleteSession('current');
            console.log("Session Deleted")
            router.replace('/')
        } catch (error: any) {
            // If the error is because no session exists, we still want to clear the user state
            console.log("Logout error (likely no session):", error.message);
        } finally {
            setUser(null);
            setAuthChecked(true);
        }
    }

    return (
        <UserContext.Provider value={{ user, authChecked, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}
