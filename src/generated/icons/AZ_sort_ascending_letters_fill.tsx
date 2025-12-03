import React from 'react';
import IconSvg from '../../svg/AZ_sort_ascending_letters_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AZSortAscendingLettersFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
