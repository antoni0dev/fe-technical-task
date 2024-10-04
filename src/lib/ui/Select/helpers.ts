import { ReactNode, ReactElement, Children } from 'react';

export function getDisplayedValue(
  value: string | number = '',
  children: ReactNode
): ReactNode | undefined {
  const childArray = Children.toArray(children) as ReactElement[];
  const selectedChild = childArray.find((child) => child.props.value === value);
  return selectedChild ? selectedChild.props.children : undefined;
}
