import React from 'react';
import IconSvg from '../../svg/apple_intelligence_frame_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const AppleIntelligenceFrameFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
