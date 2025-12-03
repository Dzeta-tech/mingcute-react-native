import React from 'react';
import IconSvg from '../../svg/heavy_snowstorm_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HeavySnowstormLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
