import axios from "axios";

const BE_URL = "https://personal-ecoshopper-be.dzlfwq.easypanel.host";
// const BE_URL = "http://localhost:5000";

export const getProducts = async () => {
  const response = await axios.get(`${BE_URL}/goods`);
  const { success, message, goods } = response.data;
  if (!success) throw new Error(message);

  return { goods };
};

export const getProduct = async (id) => {
    const response = await axios.get(`${BE_URL}/goods/good/${id}`);
    const { success, message, good } = response.data;
    if (!success) throw new Error(message);
    
    return { good };
};

export const getProductByCategory = async (category) => {
    const response = await axios.get(`${BE_URL}/goods/category/${category}`);
    const { success, message, goods } = response.data;
    if (!success) throw new Error(message);
    
    return { goods };
}

export const getProductByName = async (name) => {
    const response = await axios.get(`${BE_URL}/goods/name/${name}`);
    const { success, message, goods } = response.data;
    if (!success) throw new Error(message);
    
    return { goods };
};

export const getProductBySR = async (sr) => {
    const response = await axios.get(`${BE_URL}/goods/sr/:sr`, { params: { sr } });
    const { success, message, goods } = response.data;
    if (!success) throw new Error(message);
    
    return { goods };
};

export const getAlternativeProduct = async (id) => {
    const response = await axios.get(`${BE_URL}/goods/alternative/${id}`);
    const { success, message, goods } = response.data;
    if (!success) throw new Error(message);
    
    return { goods };
};