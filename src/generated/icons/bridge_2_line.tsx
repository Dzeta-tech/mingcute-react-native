import React from 'react';
import IconSvg from '../../svg/bridge_2_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Bridge2Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
