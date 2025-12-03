import React from 'react';
import IconSvg from '../../svg/volume_mute_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const VolumeMuteFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
