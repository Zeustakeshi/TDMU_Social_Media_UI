import axios from "axios";
import Cookies from "js-cookie";
import { memoizedRefreshToken } from "./refreshToken";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(
    (request) => {
        const token = Cookies.get("access_token");
        const userStorage = localStorage.getItem("user");
        if (token && userStorage) {
            const user = JSON.parse(userStorage);
            request.headers["Authorization"] = `Bearer ${token}`;
            request.headers["X-User-Id"] = user.id;
        }
        return request;
    },
    (error) => error
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { response, config } = error;
        const status = response?.status;

        if ((status === 401 || status === 403) && !config.sent) {
            config.sent = true;

            const token = await memoizedRefreshToken();
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return api(config);
        }

        return Promise.reject(error);
    }
);
export default api;
