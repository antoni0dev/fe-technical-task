import { FormHeading, FormDescription, Form, AmountInput, Button } from './SwapForm.styled';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { swapFormSchema, SwapFormValues } from '~/lib/schemas/swapFormSchema';
import { ChainSelector } from '../ChainSelector';
import { TokenSelector } from '../TokenSelector';
import { FormField } from '~/lib/ui/forms/FormField';
import { FormLabel } from '~/lib/ui/forms/FormLabel';
import { FormErrorMessage } from '~/lib/ui/forms/FormErrorMessage';
import { QuotePayload } from '~/pages/HomePage';
import { mapSwapFromDataToQuotePayload } from './helpers/mapSwapFromDataToQuotePayload';
import { FormInput } from '~/lib/ui/forms/FormInput';

type Props = {
  onQuotePayloadChange: (quote: QuotePayload) => void;
  isFormDisabled?: boolean;
};

export const SwapForm = ({ onQuotePayloadChange, isFormDisabled }: Props) => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    formState: { errors, isDirty, isValid }
  } = useForm<SwapFormValues>({
    resolver: zodResolver(swapFormSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: SwapFormValues) => {
    onQuotePayloadChange(mapSwapFromDataToQuotePayload(data));
  };

  const fromChainId = watch('fromChainId');
  const toChainId = watch('toChainId');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormHeading>Swap Cost Calculator</FormHeading>
        <FormDescription>
          Select a source blockchain, a currency and a destination blockchain to find out how much
          your swap would cost.
        </FormDescription>
      </div>
      <FormField>
        <FormLabel htmlFor="address">Address</FormLabel>
        <div>
          <FormInput type="text" placeholder="Enter a valid address" {...register('address')} />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </div>
      </FormField>
      <Controller
        name="fromChainId"
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <ChainSelector
            label="Source Chain"
            {...field}
            value={value !== undefined ? Number(value) : undefined}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
            error={errors.fromChainId?.message}
          />
        )}
      />
      <Controller
        name="fromTokenAddress"
        control={control}
        render={({ field }) => (
          <TokenSelector
            label="Source Token"
            {...field}
            error={errors.fromTokenAddress?.message}
            setValue={setValue}
            chainId={fromChainId}
          />
        )}
      />
      <Controller
        name="toChainId"
        control={control}
        defaultValue={undefined}
        render={({ field: { onChange, value, ...field } }) => (
          <ChainSelector
            label="Destination Chain"
            {...field}
            value={value !== undefined ? Number(value) : undefined}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
            error={errors.toChainId?.message}
          />
        )}
      />
      <Controller
        name="toTokenAddress"
        control={control}
        render={({ field }) => (
          <TokenSelector
            label="Destination Token"
            {...field}
            error={errors.toTokenAddress?.message}
            setValue={setValue}
            chainId={toChainId}
          />
        )}
      />
      <FormField>
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <div>
          <AmountInput type="number" placeholder="Enter amount" {...register('amount')} />
          <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
        </div>
      </FormField>
      <Button disabled={(!isDirty && !isValid) || isFormDisabled} type="submit">
        Submit
      </Button>
    </Form>
  );
};
