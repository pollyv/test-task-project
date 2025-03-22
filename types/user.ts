export interface UserCredentials {
    username: string;
    passphrase: string;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    credentials: UserCredentials;
    active: boolean;
    created: string;
}