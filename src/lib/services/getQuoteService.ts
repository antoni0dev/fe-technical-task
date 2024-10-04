import { getQuote, QuoteRequest, LiFiStep, RequestOptions } from '@lifi/sdk';

export type GetQuoteRequestParams = QuoteRequest;
export type GetQuoteResponse = LiFiStep;
export type GetQuoteOptions = RequestOptions;

export const getQuoteService = async (
  params: GetQuoteRequestParams,
  options: GetQuoteOptions = {}
): Promise<GetQuoteResponse> => {
  return await getQuote(params, options);
};
