import React from 'react';
import IconSvg from '../../svg/presentation_1_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const Presentation1Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
