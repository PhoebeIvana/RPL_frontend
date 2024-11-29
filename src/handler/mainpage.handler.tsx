import axios from "axios";
import config from "../config";

const BE_URL = process.env.BACKEND_URL || config.API_URL;

exports.getProducts = async () => {
    const response = await axios.get(`${BE_URL}/goods`);
    const { success, message, goods } = response.data;
    if(!success) throw new Error(message);

    return goods;
};

exports.login = async () => {
    const response = await axios.post(`${BE_URL}/auth/login`);
    const { success, message, token } = response.data;
    if(!success) throw new Error(message);
};

exports.getUserProfile = async () => {
    const response = await axios.get(`${BE_URL}/user/profile`, { headers: { cookies: `token=${localStorage.getItem('token')}` } });
    const { success, message, user, products } = response.data;
    if(!success) throw new Error(message);

    return { user, products };
};

