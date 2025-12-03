import React from 'react';
import IconSvg from '../../svg/send_plane_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SendPlaneLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
