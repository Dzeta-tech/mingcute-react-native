import React from 'react';
import IconSvg from '../../svg/dashboard_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Dashboard2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
