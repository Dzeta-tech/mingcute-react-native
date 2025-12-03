import React from 'react';
import IconSvg from '../../svg/rewind_backward_10_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RewindBackward10Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
