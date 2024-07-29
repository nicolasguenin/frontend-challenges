import { useMutation } from '@tanstack/react-query';
import api from '~/utils/api';

const postMessage = (payload: { message: string }) =>
  api.post('/api/01-profile-card', payload);

export const usePostMessage = () => {
  return useMutation({
    mutationFn: postMessage,
  });
};
