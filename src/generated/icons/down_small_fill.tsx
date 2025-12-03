import React from 'react';
import IconSvg from '../../svg/down_small_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const DownSmallFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
