import { SwapFormValues } from '~/lib/schemas/swapFormSchema';
import { QuotePayload } from '~/pages/HomePage';

export const mapSwapFromDataToQuotePayload = (data: SwapFormValues): QuotePayload => {
  const { fromChainId, fromTokenAddress, toChainId, toTokenAddress, amount, address } = data;

  return {
    fromAddress: address,
    fromChain: fromChainId,
    fromToken: fromTokenAddress,
    fromAmount: amount,
    toChain: toChainId,
    toToken: toTokenAddress
  };
};
