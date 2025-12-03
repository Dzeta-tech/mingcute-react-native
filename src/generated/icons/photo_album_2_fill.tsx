import React from 'react';
import IconSvg from '../../svg/photo_album_2_fill.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const PhotoAlbum2Fill: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
