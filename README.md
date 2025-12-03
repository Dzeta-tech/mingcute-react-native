# MingCute React Native

React Native wrapper for [MingCute](https://github.com/Richard9394/MingCute) icons. This package provides a simple, type-safe way to use MingCute icons in your React Native applications.

## Installation

```bash
pnpm add @dzeta-tech/mingcute-react-native react-native-svg react-native-svg-transformer
```

Or with npm:

```bash
npm install @dzeta-tech/mingcute-react-native react-native-svg react-native-svg-transformer --save-dev
```

Or with yarn:

```bash
yarn add @dzeta-tech/mingcute-react-native react-native-svg
yarn add react-native-svg-transformer --dev
```

### Peer Dependencies

- `react` >= 16.8.0
- `react-native` >= 0.60.0
- `react-native-svg` >= 12.0.0

### Setup react-native-svg-transformer

Add the transformer to your `metro.config.js`:

```js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = config;
```

Or if you're using plain React Native (not Expo):

```js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
```

## Usage

Import icons directly as React components:

```tsx
import { Chat1Fill, MailLine, SearchFill } from '@dzeta-tech/mingcute-react-native';

// Basic usage
<Chat1Fill width={24} height={24} />

// With custom color
<MailLine width={32} height={32} fill="#007AFF" />

// All SVG props are supported
<SearchFill 
  width="100%" 
  height={24} 
  fill="red"
  stroke="blue"
/>
```

## Icon Naming

Icons are named using PascalCase based on their file names:

- `chat_1_fill.svg` → `Chat1Fill`
- `mail_line.svg` → `MailLine`
- `search_fill.svg` → `SearchFill`

## TypeScript Support

This package includes full TypeScript support:

```tsx
import { Chat1Fill, IconName } from '@dzeta-tech/mingcute-react-native';

// Type-safe icon names
const iconName: IconName = 'chat_1_fill'; // ✅ Type-safe
```

## Available Icons

This package includes 3000+ icons from the MingCute icon set. All icons are exported as individual components that you can import directly.

```tsx
import { 
  Chat1Fill, 
  Chat1Line, 
  MailFill, 
  MailLine,
  // ... and 3000+ more
} from '@dzeta-tech/mingcute-react-native';
```

## Props

All icon components accept standard SVG props:

| Prop | Type | Description |
|------|------|-------------|
| `width` | `number \| string` | Icon width |
| `height` | `number \| string` | Icon height |
| `fill` | `string` | Fill color |
| `stroke` | `string` | Stroke color |
| `color` | `string` | Color (alias for fill) |
| `...` | `any` | All other SVG props are supported |

## Development

### Building

```bash
pnpm build
```

### Generating Icons

Icons are generated from the MingCute SVG files:

```bash
pnpm generate-icons
```

## License

This package is licensed under Apache-2.0, same as the original MingCute icon set.

## Credits

Icons are from [MingCute](https://github.com/Richard9394/MingCute) by Richard9394.
