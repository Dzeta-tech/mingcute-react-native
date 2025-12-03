import React from 'react';
import IconSvg from '../../svg/sydney_opera_house_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SydneyOperaHouseFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
