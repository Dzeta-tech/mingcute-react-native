import React from 'react';
import IconSvg from '../../svg/tv_2_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Tv2Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
