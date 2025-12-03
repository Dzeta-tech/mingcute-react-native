import React from 'react';
import IconSvg from '../../svg/fan_direction_up_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FanDirectionUpFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
