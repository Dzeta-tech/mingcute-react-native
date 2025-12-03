import React from 'react';
import IconSvg from '../../svg/layout_7_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Layout7Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
