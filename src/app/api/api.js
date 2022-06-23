const baseUrl = 'https://sicov.free.beeceptor.com/'

const Api = {

    get: (endpoint) => fetch(`${baseUrl}${endpoint}`).then(res => res.json())

}

export default Api;