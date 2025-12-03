import React from 'react';
import IconSvg from '../../svg/rewind_forward_30_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RewindForward30Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
