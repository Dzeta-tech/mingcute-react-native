import React from 'react';
import IconSvg from '../../svg/vison_pro_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const VisonProLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
