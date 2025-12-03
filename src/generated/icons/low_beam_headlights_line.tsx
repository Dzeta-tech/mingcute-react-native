import React from 'react';
import IconSvg from '../../svg/low_beam_headlights_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const LowBeamHeadlightsLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
