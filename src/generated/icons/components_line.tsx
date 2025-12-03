import React from 'react';
import IconSvg from '../../svg/components_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ComponentsLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
