import React from 'react';
import IconSvg from '../../svg/ease_in_control_point_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const EaseInControlPointLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
