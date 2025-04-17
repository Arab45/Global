import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../API/productApi';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
