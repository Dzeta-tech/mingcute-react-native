import React from 'react';
import IconSvg from '../../svg/car_window_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CarWindowFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
