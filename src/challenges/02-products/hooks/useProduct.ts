import { useQuery } from '@tanstack/react-query';
import { api } from '~/utils';
import { IProduct } from '~/challenges/02-products/interfaces/Product.interface';

const fetchProduct = async (id: number) => {
  const { data } = await api.get<IProduct>(`/api/02/products/${id}`);
  return data;
};

export const useProduct = (id: number) =>
  useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProduct(id),
  });
