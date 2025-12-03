import React from 'react';
import IconSvg from '../../svg/easy_in_out_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const EasyInOutLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
