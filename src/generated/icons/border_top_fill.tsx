import React from 'react';
import IconSvg from '../../svg/border_top_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BorderTopFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
