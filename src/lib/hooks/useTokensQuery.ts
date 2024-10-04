import { useQuery } from '@tanstack/react-query';
import {
  getTokensService,
  GetTokensOptions,
  GetTokensParams,
  GetTokensResponse
} from '../services/getTokensService';

const tokensQueryKey = 'tokens';

export const useTokensQuery = ({
  params,
  options,
  enabled
}: {
  params?: GetTokensParams;
  options?: GetTokensOptions;
  enabled?: boolean;
} = {}) => {
  return useQuery({
    queryKey: [tokensQueryKey, params?.chains],
    queryFn: async () => {
      return (await getTokensService(params, options)).tokens;
    },
    initialData: {} as GetTokensResponse,
    enabled
  });
};
