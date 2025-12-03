import React from 'react';
import IconSvg from '../../svg/sugar_coated_haws_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const SugarCoatedHawsFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
