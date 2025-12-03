import React from 'react';
import IconSvg from '../../svg/high_voltage_power_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HighVoltagePowerFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
