import React from 'react';
import IconSvg from '../../svg/ease_in_out_control_point_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const EaseInOutControlPointLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
