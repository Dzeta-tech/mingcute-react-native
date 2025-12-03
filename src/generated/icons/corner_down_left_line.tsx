import React from 'react';
import IconSvg from '../../svg/corner_down_left_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CornerDownLeftLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
