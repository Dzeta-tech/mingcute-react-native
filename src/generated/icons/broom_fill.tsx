import React from 'react';
import IconSvg from '../../svg/broom_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BroomFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
