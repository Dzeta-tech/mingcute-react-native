import React from 'react';
import IconSvg from '../../svg/airbnb_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AirbnbLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
