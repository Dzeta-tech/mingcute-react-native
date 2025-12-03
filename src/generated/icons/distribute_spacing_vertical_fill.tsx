import React from 'react';
import IconSvg from '../../svg/distribute_spacing_vertical_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const DistributeSpacingVerticalFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
