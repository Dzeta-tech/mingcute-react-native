import React from 'react';
import IconSvg from '../../svg/fast_rewind_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FastRewindLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
