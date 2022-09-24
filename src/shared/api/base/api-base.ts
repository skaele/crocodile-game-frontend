import API_URL from '@config/api-url'

// TODO: find more present name
const fetchInstance = async (path?: string, init?: RequestInit) => {
    return await fetch(`${API_URL}/${path ?? ''}`, init)
}

export default fetchInstance
