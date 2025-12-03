import React from 'react';
import IconSvg from '../../svg/sparkles_3_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Sparkles3Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
