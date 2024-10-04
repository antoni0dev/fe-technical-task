import { ChangeEvent, forwardRef, ReactNode, Ref } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { getDisplayedValue } from './helpers';

type Props = {
  id?: string;
  value?: string | number;
  onChange: ((event: ChangeEvent<HTMLSelectElement>) => void) | undefined;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  ref?: Ref<HTMLSelectElement>;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ children, value, onChange, className, disabled, id }, ref) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
      <Wrapper className={className}>
        <NativeSelect ref={ref} disabled={disabled} value={value} onChange={onChange} id={id}>
          {children}
        </NativeSelect>
        <PresentationalBit>
          {displayedValue} <Icon size={24} id="chevron-down" />
        </PresentationalBit>
      </Wrapper>
    );
  }
);

Select.displayName = 'Select';

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

export const PresentationalBit = styled.div`
  color: var(--color-text-regular);
  background: var(--color-transparent-gray);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
