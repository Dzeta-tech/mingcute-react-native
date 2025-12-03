import React from 'react';
import IconSvg from '../../svg/ad_rectangle_off_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AdRectangleOffLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
