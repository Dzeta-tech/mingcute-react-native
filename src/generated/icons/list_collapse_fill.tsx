import React from 'react';
import IconSvg from '../../svg/list_collapse_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ListCollapseFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
