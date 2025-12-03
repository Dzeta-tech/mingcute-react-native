import React from 'react';
import IconSvg from '../../svg/trello_board_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const TrelloBoardLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
