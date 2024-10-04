import { getChains as getChainsSDK, ExtendedChain, Chain as ChainSDK } from '@lifi/sdk';

export type GetChainsResponse = ExtendedChain[];
export type Chain = ChainSDK;


export const getChainsService = async (): Promise<GetChainsResponse> => {
  return await getChainsSDK();
};
