import axios from 'axios';

const API_BASE_URL = 'https://your-api.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data; // Expected to be an array of { image: string, price: number }
};
