import React from 'react';
import IconSvg from '../../svg/charging_pile_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ChargingPileLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
