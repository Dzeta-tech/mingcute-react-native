import React from 'react';
import IconSvg from '../../svg/arrow_left_down_circle_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ArrowLeftDownCircleLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
