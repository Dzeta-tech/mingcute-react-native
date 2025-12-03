import React from 'react';
import IconSvg from '../../svg/flower_5_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Flower5Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
