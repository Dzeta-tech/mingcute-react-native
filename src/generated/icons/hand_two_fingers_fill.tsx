import React from 'react';
import IconSvg from '../../svg/hand_two_fingers_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const HandTwoFingersFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
