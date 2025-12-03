import React from 'react';
import IconSvg from '../../svg/front_windshield_defroster_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const FrontWindshieldDefrosterFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
