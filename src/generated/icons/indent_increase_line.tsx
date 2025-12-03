import React from 'react';
import IconSvg from '../../svg/indent_increase_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const IndentIncreaseLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
