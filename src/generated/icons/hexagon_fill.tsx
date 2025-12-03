import React from 'react';
import IconSvg from '../../svg/hexagon_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HexagonFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
