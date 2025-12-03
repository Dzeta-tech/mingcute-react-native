import React from 'react';
import IconSvg from '../../svg/brightness_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BrightnessLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
