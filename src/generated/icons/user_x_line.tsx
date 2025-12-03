import React from 'react';
import IconSvg from '../../svg/user_x_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const UserXLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
