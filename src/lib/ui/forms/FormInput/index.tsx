import styled from 'styled-components';

export const FormInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  color: var(--color-text-regular);
  background: var(--color-transparent-gray);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;

  &::placeholder {
    color: var(--color-text-regular);
  }
`;
