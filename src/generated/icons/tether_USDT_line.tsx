import React from 'react';
import IconSvg from '../../svg/tether_USDT_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TetherUSDTLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
