import React from 'react';
import IconSvg from '../../svg/inventory_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const InventoryFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
