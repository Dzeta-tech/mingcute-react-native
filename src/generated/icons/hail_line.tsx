import React from 'react';
import IconSvg from '../../svg/hail_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HailLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
