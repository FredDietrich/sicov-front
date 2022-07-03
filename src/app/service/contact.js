import Api from "../api/api"

export const sendContactRequest = (info) => {
    return new Promise((resolve, reject) => {
        Api.post('/contact')
            .then(data => resolve(data))
            .catch(e => {
                console.error(e);
                reject(e);
            })
    })
}