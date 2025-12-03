import React from 'react';
import IconSvg from '../../svg/pencil_2_ai_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Pencil2AiFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
