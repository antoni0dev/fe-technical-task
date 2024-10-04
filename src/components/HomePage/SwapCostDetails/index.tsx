import { LiFiStep } from '@lifi/sdk';
import { Button } from '../SwapForm/SwapForm.styled';
import { BoldText, Heading, Text, Wrapper } from './SwapCostDetails';
import { extractError } from '~/lib/utils/extract-error';
import { FormErrorMessage } from '~/lib/ui/forms/FormErrorMessage';

type Props = {
  quote: LiFiStep | undefined;
  onClearQuotePayload: () => void;
  isFetching: boolean;
  error: unknown;
};

export function SwapCostDetails({ quote, onClearQuotePayload, error, isFetching }: Props) {
  let content;

  if (isFetching) {
    content = <Text>Calculating estimate...</Text>;
  }
  if (error) {
    content = <FormErrorMessage>Error fetching estimate: {extractError(error)}</FormErrorMessage>;
  }

  const estimatedFees = quote?.estimate?.feeCosts?.reduce(
    (sum, fee) => sum + Number(fee.amountUSD),
    0
  );
  const estimatedDuration = quote?.estimate?.executionDuration;

  content = (
    <>
      <Heading>Swap Cost Details</Heading>
      <Text>
        Estimated Fees: {estimatedFees ? <BoldText>${estimatedFees?.toFixed(2)} </BoldText> : '--'}
      </Text>

      <Text>
        Estimated Transfer Time:{' '}
        {estimatedDuration ? <BoldText>{estimatedDuration} seconds</BoldText> : '--'}
      </Text>
      {quote && <Button onClick={onClearQuotePayload}>Clear</Button>}
    </>
  );

  return <Wrapper>{content}</Wrapper>;
}
