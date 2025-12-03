import React from 'react';
import IconSvg from '../../svg/toggle_left_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ToggleLeftFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
