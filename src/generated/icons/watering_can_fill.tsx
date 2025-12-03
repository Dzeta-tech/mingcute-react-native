import React from 'react';
import IconSvg from '../../svg/watering_can_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const WateringCanFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
