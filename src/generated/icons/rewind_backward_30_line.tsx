import React from 'react';
import IconSvg from '../../svg/rewind_backward_30_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RewindBackward30Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
