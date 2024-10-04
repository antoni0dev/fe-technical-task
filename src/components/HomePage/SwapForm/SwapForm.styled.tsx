import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  background: var(--color-background);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormHeading = styled.h2`
  color: var(--color-text-regular);
`;

export const FormDescription = styled.p`
  color: var(--color-text-regular);
  font-size: 13px;
`;

export const AmountInput = styled.input`
  color: var(--color-text-regular);
  background-color: var(--color-transparent-gray);
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  color: var(--color-text-regular);
  font-size: 16px;

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 24px;
  color: var(--color-text-regular);
  background-color: var(--color-primary);
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
