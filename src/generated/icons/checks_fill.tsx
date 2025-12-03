import React from 'react';
import IconSvg from '../../svg/checks_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ChecksFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
