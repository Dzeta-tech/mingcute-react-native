import React from 'react';
import IconSvg from '../../svg/user_edit_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const UserEditFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
