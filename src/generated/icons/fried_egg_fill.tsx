import React from 'react';
import IconSvg from '../../svg/fried_egg_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FriedEggFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
