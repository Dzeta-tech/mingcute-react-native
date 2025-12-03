import React from 'react';
import IconSvg from '../../svg/crystal_ball_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CrystalBallLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
