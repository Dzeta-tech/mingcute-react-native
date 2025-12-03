import React from 'react';
import IconSvg from '../../svg/pentagon_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PentagonLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
