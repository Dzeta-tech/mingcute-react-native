import React from 'react';
import IconSvg from '../../svg/large_arrow_down_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const LargeArrowDownFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
