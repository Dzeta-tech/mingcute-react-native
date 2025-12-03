import React from 'react';
import IconSvg from '../../svg/flight_inflight_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FlightInflightLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
