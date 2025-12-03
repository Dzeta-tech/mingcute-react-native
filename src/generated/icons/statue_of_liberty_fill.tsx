import React from 'react';
import IconSvg from '../../svg/statue_of_liberty_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const StatueOfLibertyFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
