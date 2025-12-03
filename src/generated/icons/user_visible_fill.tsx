import React from 'react';
import IconSvg from '../../svg/user_visible_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const UserVisibleFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
