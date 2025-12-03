import React from 'react';
import IconSvg from '../../svg/seat_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SeatFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
