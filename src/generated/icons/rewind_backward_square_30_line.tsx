import React from 'react';
import IconSvg from '../../svg/rewind_backward_square_30_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RewindBackwardSquare30Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
