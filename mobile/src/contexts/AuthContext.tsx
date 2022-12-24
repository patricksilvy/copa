import { createContext, ReactNode } from "react";

interface UserProps {
    name: string,
    avatarUrl: string
}

interface AuthProviderProps {
    children: ReactNode
}

export interface AuthContextDataProps {
    user: UserProps,
    signIn: () => Promise<void>   
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
    async function signIn() {
        console.log('Vamos logar!')
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Patrick',
                avatarUrl: 'https://github.com/patricksilvy.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}