import React from 'react';
import IconSvg from '../../svg/snowstorm_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SnowstormFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
