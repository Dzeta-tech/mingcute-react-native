import React from 'react';
import IconSvg from '../../svg/sort_descending_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SortDescendingFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
