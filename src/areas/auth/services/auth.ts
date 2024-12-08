import api from '@/core/api'

export const login = async (credentials: object) => {
    await api.get('sanctum/csrf-cookie');
    return await api.post('login', credentials)
}

export const logout = async () => {
    return await api.post('logout', {})
}
