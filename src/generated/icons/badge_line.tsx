import React from 'react';
import IconSvg from '../../svg/badge_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BadgeLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
