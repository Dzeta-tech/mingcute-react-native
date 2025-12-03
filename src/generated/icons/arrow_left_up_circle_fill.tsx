import React from 'react';
import IconSvg from '../../svg/arrow_left_up_circle_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ArrowLeftUpCircleFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
