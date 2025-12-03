import React from 'react';
import IconSvg from '../../svg/bank_of_china_tower_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BankOfChinaTowerFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
