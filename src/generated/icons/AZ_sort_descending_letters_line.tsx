import React from 'react';
import IconSvg from '../../svg/AZ_sort_descending_letters_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AZSortDescendingLettersLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
