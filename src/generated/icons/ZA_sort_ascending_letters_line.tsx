import React from 'react';
import IconSvg from '../../svg/ZA_sort_ascending_letters_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ZASortAscendingLettersLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
