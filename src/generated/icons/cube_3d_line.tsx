import React from 'react';
import IconSvg from '../../svg/cube_3d_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Cube3dLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
