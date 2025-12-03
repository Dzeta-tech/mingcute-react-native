import React from 'react';
import IconSvg from '../../svg/cellphone_2_horizontal_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Cellphone2HorizontalLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
