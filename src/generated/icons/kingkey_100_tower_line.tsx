import React from 'react';
import IconSvg from '../../svg/kingkey_100_tower_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Kingkey100TowerLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
