import { useQuery } from '@tanstack/react-query';
import {
  GetQuoteOptions,
  GetQuoteRequestParams,
  getQuoteService
} from '../services/getQuoteService';

const quoteQueryKey = 'quote';

export const useQuoteQuery = ({
  params,
  options
}: {
  params?: GetQuoteRequestParams;
  options?: GetQuoteOptions;
}) => {
  return useQuery({
    queryKey: [quoteQueryKey, params],
    queryFn: async () => {
      if (!params) {
        return;
      }

      return await getQuoteService(params, options);
    },
    enabled: Boolean(params),
    retry: false
  });
};
