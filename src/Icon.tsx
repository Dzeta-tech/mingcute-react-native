import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconStyle } from './types';
import { getIconData, IconName } from './icon-registry';

export interface MingCuteIconProps {
  name: string;
  size?: number;
  color?: string;
  variant?: IconStyle;
}

/**
 * MingCute Icon Component for React Native
 * 
 * @example
 * ```tsx
 * <Icon name="chat_1_fill" size={24} color="#000" />
 * <Icon name="search" variant="line" size={32} color="#007AFF" />
 * ```
 */
export const Icon: React.FC<MingCuteIconProps> = ({
  name,
  size = 24,
  color = '#000000',
  variant = 'fill',
}) => {
  // If name already includes variant, use it directly
  // Otherwise, append the variant
  const iconName = name.endsWith('_fill') || name.endsWith('_line')
    ? name
    : `${name}_${variant}`;

  const iconData = getIconData(iconName as IconName);

  if (!iconData) {
    if (__DEV__) {
      console.warn(`Icon "${iconName}" not found`);
    }
    return null;
  }

  const { paths, width, height } = iconData;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${width} ${height}`}
    >
      {paths.map((path, index) => {
        // Handle fill vs stroke based on the path's fill property
        // If fill is 'none' or a specific color (like #09244B), treat as stroke
        // Otherwise use fill with the provided color
        const pathFill = path.fill;
        const isStroke = pathFill === 'none' || !pathFill || (pathFill && pathFill !== 'currentColor' && pathFill.startsWith('#'));
        
        return (
          <Path
            key={index}
            d={path.d}
            fill={isStroke ? 'none' : color}
            stroke={isStroke ? color : undefined}
            strokeWidth={isStroke ? 2 : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </Svg>
  );
};

export default Icon;

