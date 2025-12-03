import React from 'react';
import IconSvg from '../../svg/bedside_table_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BedsideTable2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
