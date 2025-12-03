import React from 'react';
import IconSvg from '../../svg/ice_cream_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const IceCream2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
