import { forwardRef } from 'react';
import { useChainsQuery } from '~/lib/hooks/useChainsQuery';
import { SwapFormValues } from '~/lib/schemas/swapFormSchema';
import { FormErrorMessage } from '~/lib/ui/forms/FormErrorMessage';
import { FormField } from '~/lib/ui/forms/FormField';
import { FormLabel } from '~/lib/ui/forms/FormLabel';
import { FormSelect } from '~/lib/ui/forms/FormSelect';
import { extractError } from '~/lib/utils/extract-error';

type Props = {
  label: string;
  name: keyof SwapFormValues;
  error?: string;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const ChainSelector = forwardRef<HTMLSelectElement, Props>(
  ({ label, name, value, onChange, error }, ref) => {
    const { data: chains = [], isFetching, error: chainsError, isError } = useChainsQuery();
    const derivedError = error || chainsError;

    return (
      <FormField>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <div>
          <FormSelect
            id={name}
            value={value}
            onChange={onChange}
            ref={ref}
            disabled={isFetching || isError}>
            <option value="">{isFetching ? 'Loading...' : 'Please choose an option'}</option>
            {chains.map(({ id, name }) => (
              <option key={id} value={id}>
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

ChainSelector.displayName = 'ChainSelector';
