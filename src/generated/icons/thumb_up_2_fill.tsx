import React from 'react';
import IconSvg from '../../svg/thumb_up_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ThumbUp2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
