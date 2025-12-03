import React from 'react';
import IconSvg from '../../svg/target_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TargetFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
