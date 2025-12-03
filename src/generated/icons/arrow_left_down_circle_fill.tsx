import React from 'react';
import IconSvg from '../../svg/arrow_left_down_circle_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ArrowLeftDownCircleFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
