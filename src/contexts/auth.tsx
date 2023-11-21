import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

interface SignInCredentials {
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;


            await new Promise(resolve => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }

        loadStorageData();
    }, []);

    async function signIn(credentials: SignInCredentials) {
        const response = await auth.signIn(credentials);
        
        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }


    async function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}