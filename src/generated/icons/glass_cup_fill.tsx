import React from 'react';
import IconSvg from '../../svg/glass_cup_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const GlassCupFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
