import React from 'react';
import IconSvg from '../../svg/mastodon_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const MastodonLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
