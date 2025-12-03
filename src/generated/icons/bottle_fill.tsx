import React from 'react';
import IconSvg from '../../svg/bottle_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BottleFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
