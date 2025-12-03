import React from 'react';
import IconSvg from '../../svg/pin_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PinFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
