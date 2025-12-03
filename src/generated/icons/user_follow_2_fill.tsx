import React from 'react';
import IconSvg from '../../svg/user_follow_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const UserFollow2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
