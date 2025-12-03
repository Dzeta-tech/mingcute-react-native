import React from 'react';
import IconSvg from '../../svg/bookmark_edit_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const BookmarkEditLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
