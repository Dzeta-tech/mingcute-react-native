import React from 'react';
import IconSvg from '../../svg/git_pull_request_close_line.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const GitPullRequestCloseLine: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
