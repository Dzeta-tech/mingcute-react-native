import React from 'react';
import IconSvg from '../../svg/ZA_sort_descending_letters_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ZASortDescendingLettersFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
