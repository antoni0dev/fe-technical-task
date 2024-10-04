import styled from 'styled-components';
import { Search, Menu, ChevronDown, X } from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'chevron-down': ChevronDown,
  close: X
};

type Props = {
  id: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

export const Icon = ({ id, color, size, strokeWidth, ...delegated }: Props) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  strokeWidth?: number;
}>`
  & > svg {
    display: block;
    stroke-width: ${(p) => (p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined)};
  }
`;
