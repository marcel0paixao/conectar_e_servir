import axios from "axios"

export interface User {
    id: number;
    username: string;
    email: string;
}

interface Response {
    logged: boolean;
    user: User;
}

export function login(email: string, password: string): Promise<Response> {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8090/login/${email}/${password}`)
                .then(response => resolve(response.data))
                .catch(reject)
    })
}