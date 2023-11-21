import Api from './api';

interface Response {
    token: string;
    user: {
        name: string;
        email: string;
        phone_number: string | null;
    }
}

interface SignInCredentials {
    email: string;
    password: string;
}

export function signIn(login: SignInCredentials): Promise<Response> {
    return new Promise(resolve => {
        Api.post('/login', {
            email: login.email,
            password: login.password,
        }).then((response) => {
            console.log(response.data);
            resolve({
                token: response.data.access_token,
                user: {
                    name: response.data.full_name,
                    email: response.data.email,
                    phone_number: response.data.phone_number,
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    });
}