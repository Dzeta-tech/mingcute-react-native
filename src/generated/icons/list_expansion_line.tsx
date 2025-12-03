import React from 'react';
import IconSvg from '../../svg/list_expansion_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ListExpansionLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
