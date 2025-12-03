import React from 'react';
import IconSvg from '../../svg/hammer_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HammerFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
