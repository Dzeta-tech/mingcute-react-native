import React from 'react';
import IconSvg from '../../svg/numbers_09_sort_descending_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Numbers09SortDescendingLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
