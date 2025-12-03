import React from 'react';
import IconSvg from '../../svg/timeline_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TimelineFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
