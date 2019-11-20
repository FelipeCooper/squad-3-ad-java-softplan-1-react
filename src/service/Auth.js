import api from "./api"
export const isAuthenticated = () => {
    return new Promise(resolve => setTimeout(resolve(async () => {
        try {
            let request = await api('/auth/refresh_token', {
                method: "POST"
            })
            login(request.headers.authorization);
            return true;
        } catch (err) {
            logout()
            return false;
        }
    }),1000))


    setTimeout(async () => {
        try {
            let request = await api('/auth/refresh_token', {
                method: "POST"
            })
            login(request.headers.authorization);
            return true;
        } catch (err) {
            logout()
            return false;
        }
    }, 2000)
}
export const getToken = () => localStorage.getItem('TOKEN_KEY');
export const login = (token) => localStorage.setItem('TOKEN_KEY', token);
export const logout = () => localStorage.removeItem('TOKEN_KEY');