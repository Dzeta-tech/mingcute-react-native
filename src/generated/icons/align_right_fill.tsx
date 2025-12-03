import React from 'react';
import IconSvg from '../../svg/align_right_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AlignRightFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
