import React from 'react';
import IconSvg from '../../svg/building_1_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Building1Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
