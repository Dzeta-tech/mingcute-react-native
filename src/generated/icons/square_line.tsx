import React from 'react';
import IconSvg from '../../svg/square_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SquareLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
