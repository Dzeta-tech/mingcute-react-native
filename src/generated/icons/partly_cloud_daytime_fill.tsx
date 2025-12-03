import React from 'react';
import IconSvg from '../../svg/partly_cloud_daytime_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PartlyCloudDaytimeFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
