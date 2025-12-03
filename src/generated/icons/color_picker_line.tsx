import React from 'react';
import IconSvg from '../../svg/color_picker_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ColorPickerLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
