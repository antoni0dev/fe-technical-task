import { QuoteRequest } from '@lifi/sdk';
import { Header } from '../../components/Header';
import { SwapForm } from '../../components/HomePage/SwapForm';
import { Wrapper, Main } from './HomePage.styled';
import { useState } from 'react';
import { SwapCostDetails } from '~/components/HomePage/SwapCostDetails';
import { useQuoteQuery } from '~/lib/hooks/useQuoteQuery';

export type QuotePayload = Pick<
  QuoteRequest,
  'fromAddress' | 'fromChain' | 'fromToken' | 'fromAmount' | 'toChain' | 'toToken'
>;

const HomePage = () => {
  const [quotePayload, setQuotePayload] = useState<QuotePayload | null>(null);

  const {
    data: quote,
    isFetching,
    error
  } = useQuoteQuery({
    params: quotePayload as QuoteRequest
  });

  return (
    <Wrapper>
      <Header />
      <Main>
        <SwapForm
          onQuotePayloadChange={(quote: QuotePayload) => {
            setQuotePayload(quote);
          }}
          isFormDisabled={isFetching}
        />
        <SwapCostDetails
          quote={quote}
          isFetching={isFetching}
          error={error}
          onClearQuotePayload={() => {
            setQuotePayload(null);
          }}
        />
      </Main>
    </Wrapper>
  );
};

export default HomePage;
