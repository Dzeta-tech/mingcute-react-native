import React from 'react';
import IconSvg from '../../svg/father_christmas_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FatherChristmasFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
