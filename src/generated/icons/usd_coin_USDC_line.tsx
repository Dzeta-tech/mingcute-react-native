import React from 'react';
import IconSvg from '../../svg/usd_coin_USDC_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const UsdCoinUSDCLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
