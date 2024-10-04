import {
  getTokens as getTokensSDK,
  TokensResponse,
  TokensRequest,
  RequestOptions
} from '@lifi/sdk';

export type GetTokensResponse = TokensResponse;
export type GetTokensParams = TokensRequest;
export type GetTokensOptions = RequestOptions;

export const getTokensService = async (
  params?: GetTokensParams,
  options?: GetTokensOptions
): Promise<GetTokensResponse> => {
  return await getTokensSDK(params, options);
};
