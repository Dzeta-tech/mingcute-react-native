import React from 'react';
import IconSvg from '../../svg/shopping_cart_1_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ShoppingCart1Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
