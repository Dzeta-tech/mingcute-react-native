import React from 'react';
import IconSvg from '../../svg/text_color_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TextColorFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
