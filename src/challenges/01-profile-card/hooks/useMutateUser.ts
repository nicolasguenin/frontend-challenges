import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from '~/challenges/01-profile-card/interfaces/User.interface';
import { api } from '~/utils';

const updateUser = async (payload: Partial<IUser>) => {
  const { data } = await api.put<IUser>('/api/01/profile', payload);
  return data;
};

export const useMutateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
    },
  });
};
