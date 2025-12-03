import React from 'react';
import IconSvg from '../../svg/flip_horizontal_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FlipHorizontalFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
