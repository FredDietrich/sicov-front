const baseUrl = 'nonono'

const Api = {

    get: (endpoint) => fetch(`${baseUrl}${endpoint}`).then(res => res.json()),
    post: (endpoint, data) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseUrl}${endpoint}`, options).then(res => res.json())
    }

}

export default Api;