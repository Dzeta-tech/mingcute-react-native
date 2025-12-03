import React from 'react';
import IconSvg from '../../svg/numbers_90_sort_ascending_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Numbers90SortAscendingFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
