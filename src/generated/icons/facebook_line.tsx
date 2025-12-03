import React from 'react';
import IconSvg from '../../svg/facebook_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FacebookLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
