import React from 'react';
import IconSvg from '../../svg/phone_incoming_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PhoneIncomingFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
