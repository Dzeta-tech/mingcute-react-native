import React from 'react';
import IconSvg from '../../svg/forbid_circle_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ForbidCircleFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
