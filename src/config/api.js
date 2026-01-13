import axios from 'axios';
import apiConfig from './apiConfig';

const PUBLIC_ROUTE = '/public/v1';
const BASE_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;

// Public API Instance
export const publicAxiosInstance = axios.create({
    baseURL: BASE_URL,
});

// Add request interceptor
publicAxiosInstance.interceptors.request.use(
    (config) => {
        const authorization = localStorage.getItem('fg_group_user_authorization');
        if (authorization) {
            config.headers['authorization'] = authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
publicAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('user_info');
        }
        return Promise.reject(error);
    }
);