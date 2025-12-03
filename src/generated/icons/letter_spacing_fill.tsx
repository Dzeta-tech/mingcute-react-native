import React from 'react';
import IconSvg from '../../svg/letter_spacing_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const LetterSpacingFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
