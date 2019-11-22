import api,{delay} from "./api"
export const isAuthenticated = () => {
    return delay(600).then(async () => {
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
    })
}
export const getToken = () => localStorage.getItem('TOKEN_KEY');
export const login = (token) => localStorage.setItem('TOKEN_KEY', token);
export const logout = () => localStorage.removeItem('TOKEN_KEY');
