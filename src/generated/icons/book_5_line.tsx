import React from 'react';
import IconSvg from '../../svg/book_5_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Book5Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
