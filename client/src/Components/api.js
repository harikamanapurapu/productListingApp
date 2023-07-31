import axios from 'axios';

export const fetchproducts = async () => {
  try {
    const response = await axios.get('https://product-api-nun3.onrender.com/Viewproducts');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
