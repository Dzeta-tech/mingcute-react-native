import React from 'react';
import IconSvg from '../../svg/light_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const LightLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
