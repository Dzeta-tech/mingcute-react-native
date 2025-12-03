import React from 'react';
import IconSvg from '../../svg/git_merge_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const GitMergeFill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
