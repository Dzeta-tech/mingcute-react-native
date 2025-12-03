import React from 'react';
import IconSvg from '../../svg/trending_down_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TrendingDownLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
