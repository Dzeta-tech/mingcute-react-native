import React from 'react';
import IconSvg from '../../svg/pot_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PotLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
