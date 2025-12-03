import React from 'react';
import IconSvg from '../../svg/solar_panel_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SolarPanelLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
