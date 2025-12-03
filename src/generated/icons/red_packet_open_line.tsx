import React from 'react';
import IconSvg from '../../svg/red_packet_open_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const RedPacketOpenLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
