import React from 'react';
import IconSvg from '../../svg/tv_1_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Tv1Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
