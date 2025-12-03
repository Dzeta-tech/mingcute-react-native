import React from 'react';
import IconSvg from '../../svg/currency_rubel_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const CurrencyRubel2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
