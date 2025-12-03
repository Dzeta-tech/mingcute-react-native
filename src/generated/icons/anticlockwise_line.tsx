import React from 'react';
import IconSvg from '../../svg/anticlockwise_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AnticlockwiseLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
