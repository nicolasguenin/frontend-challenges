'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '~/utils';
import type { IUser } from '~/challenges/01-profile-card/interfaces/User.interface';

const fetchUser = async () => {
  const { data } = await api.get<IUser>('/api/01/profile');
  return data;
};

export const useGetUser = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(),
  });
