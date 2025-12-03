import React from 'react';
import IconSvg from '../../svg/magic_hat_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const MagicHat2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
