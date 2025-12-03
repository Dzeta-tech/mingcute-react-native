import React from 'react';
import IconSvg from '../../svg/vector_group_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const VectorGroupLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
