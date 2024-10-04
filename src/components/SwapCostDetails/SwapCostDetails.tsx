import styled from 'styled-components';

export const Wrapper = styled.form`
  align-self: flex-end;

  padding: 16px;
  background: var(--color-background);
  border-radius: 12px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  color: var(--color-text-regular);
  font-size: 18px;
`;

export const Heading = styled.h2`
  color: var(--color-text-regular);
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
