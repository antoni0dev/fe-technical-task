import { forwardRef, useEffect } from 'react';
import { useTokensQuery } from '~/lib/hooks/useTokensQuery';
import { SwapFormValues } from '~/lib/schemas/swapFormSchema';
import { FormErrorMessage } from '~/lib/ui/forms/FormErrorMessage';
import { FormField } from '~/lib/ui/forms/FormField';
import { FormLabel } from '~/lib/ui/forms/FormLabel';
import { FormSelect } from '~/lib/ui/forms/FormSelect';
import { extractError } from '~/lib/utils/extract-error';

type Props = {
  label: string;
  name: keyof SwapFormValues;
  value: string;
  chainId: number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setValue: (name: keyof SwapFormValues, value: SwapFormValues[typeof name]) => void;
  error?: string;
  placeholder?: string;
};

export const TokenSelector = forwardRef<HTMLSelectElement, Props>(
  ({ label, name, value, error, chainId, setValue, onChange }, ref) => {
    const {
      data: tokens,
      isFetching,
      error: tokensError,
      isError
    } = useTokensQuery({
      params: {
        chains: [chainId!]
      },
      enabled: Boolean(chainId)
    });
    const derivedError = error || tokensError;

    useEffect(() => {
      setValue(name, '');
    }, [chainId, setValue, name]);

    const defaultOptionText = isFetching
      ? 'Loading...'
      : !chainId
        ? 'Please select a chain first'
        : 'Please choose an option';

    return (
      <FormField>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <div>
          <FormSelect
            value={value}
            onChange={onChange}
            ref={ref}
            id={name}
            disabled={isFetching || isError || chainId === undefined}>
            <option value="">{defaultOptionText}</option>
            {chainId !== undefined &&
              tokens[chainId]?.map(({ name, address }, index) => (
                <option key={index} value={address}>
                  {name}
                </option>
              ))}
          </FormSelect>
          {Boolean(derivedError) && (
            <FormErrorMessage>{extractError(derivedError)}</FormErrorMessage>
          )}
        </div>
      </FormField>
    );
  }
);

TokenSelector.displayName = 'TokenSelector';
