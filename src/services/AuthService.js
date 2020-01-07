export default class AuthService {
    static login(credentials){
        return fetch(process.env.REACT_APP_API_BASE_URL + '/authentication_token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res => res.json());
    }
}
