import React from 'react';
import IconSvg from '../../svg/text_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TextFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
