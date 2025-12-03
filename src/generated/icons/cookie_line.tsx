import React from 'react';
import IconSvg from '../../svg/cookie_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CookieLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
