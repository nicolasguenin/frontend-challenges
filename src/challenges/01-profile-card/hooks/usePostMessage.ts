import { useMutation } from '@tanstack/react-query';
import { api } from '~/utils';

const postMessage = (payload: { message: string }) =>
  api.post('/api/01/profile', payload);

export const usePostMessage = () => {
  return useMutation({
    mutationFn: postMessage,
  });
};
