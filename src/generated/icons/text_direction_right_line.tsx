import React from 'react';
import IconSvg from '../../svg/text_direction_right_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TextDirectionRightLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
