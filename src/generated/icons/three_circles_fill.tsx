import React from 'react';
import IconSvg from '../../svg/three_circles_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ThreeCirclesFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
