import React from 'react';
import IconSvg from '../../svg/align_arrow_up_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AlignArrowUpLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
