import axios from 'axios';

const API_BASE_URL = 'https://your-api.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${process.env.EXPO_PUBLIC_PLACE_ENDPOINT}/posts`);
  const data = response.data; // Expected to be an array of { image: string, price: number }
  console.log(data)
  return data
};
