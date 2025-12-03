# MingCute React Native

React Native wrapper for [MingCute](https://github.com/Richard9394/MingCute) icons. This package provides a simple, type-safe way to use MingCute icons in your React Native applications.

## Installation

```bash
pnpm add mingcute-react-native react-native-svg
```

Or with npm:

```bash
npm install mingcute-react-native react-native-svg
```

Or with yarn:

```bash
yarn add mingcute-react-native react-native-svg
```

### Peer Dependencies

- `react` >= 16.8.0
- `react-native` >= 0.60.0
- `react-native-svg` >= 12.0.0

## Usage

```tsx
import { Icon } from 'mingcute-react-native';

// Basic usage with icon name
<Icon name="chat_1_fill" size={24} color="#000" />

// Using variant prop (automatically appends _fill or _line)
<Icon name="search" variant="line" size={32} color="#007AFF" />

// Icon name can include variant suffix
<Icon name="mail_fill" size={24} color="#FF0000" />
```

## Props

### Icon Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Icon name (slug). Can include `_fill` or `_line` suffix, or use `variant` prop |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `"#000000"` | Icon color (hex, rgb, or named color) |
| `variant` | `'fill' \| 'line'` | `'fill'` | Icon variant. Only used if `name` doesn't already include variant suffix |

## Icon Naming

Icons are named using the pattern: `{icon_name}_{variant}`

- `variant` can be `fill` or `line`
- Examples: `chat_1_fill`, `mail_line`, `search_fill`

If you provide just the base name (e.g., `search`), the `variant` prop will be used to construct the full name.

## TypeScript Support

This package includes full TypeScript support with type-safe icon names:

```tsx
import { Icon, IconName } from 'mingcute-react-native';

// IconName is a union type of all available icon names
const iconName: IconName = 'chat_1_fill'; // ✅ Type-safe
const invalid: IconName = 'non_existent'; // ❌ Type error
```

## Available Icons

This package includes over 2000+ icons from the MingCute icon set. To see all available icons, you can:

```tsx
import { getAllIconNames } from 'mingcute-react-native';

const allIcons = getAllIconNames();
console.log(allIcons); // Array of all icon names
```

## Development

### Building

```bash
pnpm build
```

### Generating Icon Registry

The icon registry is generated from the MingCute submodule:

```bash
pnpm generate-icons
```

## License

This package is licensed under Apache-2.0, same as the original MingCute icon set.

## Credits

Icons are from [MingCute](https://github.com/Richard9394/MingCute) by Richard9394.

