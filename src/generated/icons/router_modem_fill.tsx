import React from 'react';
import IconSvg from '../../svg/router_modem_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RouterModemFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
