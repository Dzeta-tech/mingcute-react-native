import React from 'react';
import IconSvg from '../../svg/list_check_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ListCheck2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
