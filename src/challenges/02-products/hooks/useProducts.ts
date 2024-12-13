import { useQuery } from '@tanstack/react-query';
import { api } from '~/utils';
import { IProducts } from '~/challenges/02-products/interfaces/Product.interface';

const fetchProducts = async () => {
  const { data } = await api.get<IProducts>('/api/02/products');
  return data;
};

export const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  });
