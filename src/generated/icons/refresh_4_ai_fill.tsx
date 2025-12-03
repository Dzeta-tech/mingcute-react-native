import React from 'react';
import IconSvg from '../../svg/refresh_4_ai_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Refresh4AiFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
