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
  const estimatedFees = quote?.estimate?.feeCosts?.reduce(
    (sum, fee) => sum + Number(fee.amountUSD),
    0
  );

  const estimatedDuration = quote?.estimate?.executionDuration;

  let content;

  if (isFetching) {
    content = <Text>Calculating estimate...</Text>;
  } else if (error) {
    content = <FormErrorMessage>Error fetching estimate: {extractError(error)}</FormErrorMessage>;
  } else if (estimatedFees !== undefined && estimatedDuration !== undefined) {
    content = (
      <>
        <Heading>Swap Cost Details</Heading>
        <Text>
          Estimated Fees: <BoldText>${estimatedFees?.toFixed(4)} </BoldText>
        </Text>

        <Text>
          Estimated Transfer Time: <BoldText>{estimatedDuration} seconds</BoldText>
        </Text>
        {quote && <Button onClick={onClearQuotePayload}>Clear</Button>}
      </>
    );
  }

  return <Wrapper>{content || <Text>Fill the form to get data.</Text>}</Wrapper>;
}
