import React from 'react';
import IconSvg from '../../svg/corner_up_right_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CornerUpRightLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
