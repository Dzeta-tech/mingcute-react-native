import React from 'react';
import IconSvg from '../../svg/magic_hat_2_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const MagicHat2Line: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
