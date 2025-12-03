import React from 'react';
import IconSvg from '../../svg/gumroad_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const GumroadFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
