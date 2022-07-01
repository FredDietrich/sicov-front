import Api from "../api/api"

export const validateLogin = (credentials) => {
    Api.post('login').then(data => {
        console.log(data);
    })
}