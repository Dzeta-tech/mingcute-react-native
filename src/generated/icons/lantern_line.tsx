import React from 'react';
import IconSvg from '../../svg/lantern_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const LanternLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
