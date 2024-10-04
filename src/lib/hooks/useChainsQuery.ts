import { useQuery } from '@tanstack/react-query';
import { getChainsService } from '../services/getChainsService';

const chainsQueryKey = 'chains';

export const useChainsQuery = () => {
  return useQuery({
    queryKey: [chainsQueryKey],
    queryFn: async () => {
      return await getChainsService();
    },
    staleTime: Infinity
  });
};
