import styled from 'styled-components';
import { Select } from '../../Select';

export const FormSelect = styled(Select)`
  width: 100%;

  &:disabled {
    cursor: not-allowed;
  }
`;
