import React from 'react';
import IconSvg from '../../svg/american_football_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AmericanFootballLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
