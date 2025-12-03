import React from 'react';
import IconSvg from '../../svg/sandglass_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Sandglass2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
