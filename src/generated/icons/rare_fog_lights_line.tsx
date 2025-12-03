import React from 'react';
import IconSvg from '../../svg/rare_fog_lights_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RareFogLightsLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
