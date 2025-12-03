import React from 'react';
import IconSvg from '../../svg/vector_bezier_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const VectorBezierFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
