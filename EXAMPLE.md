# Usage Examples

## Basic Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'mingcute-react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Using full icon name with variant */}
      <Icon name="chat_1_fill" size={32} color="#007AFF" />
      
      {/* Using base name with variant prop */}
      <Icon name="mail" variant="line" size={24} color="#000000" />
      
      {/* Different sizes and colors */}
      <Icon name="search_fill" size={48} color="#FF0000" />
      <Icon name="heart_line" size={20} color="#FF6B6B" />
    </View>
  );
}
```

## TypeScript Usage

```tsx
import { Icon, IconName, getAllIconNames } from 'mingcute-react-native';

// Type-safe icon names
const iconName: IconName = 'chat_1_fill'; // ✅ Valid
// const invalid: IconName = 'non_existent'; // ❌ Type error

// Get all available icon names
const allIcons = getAllIconNames();
console.log(`Total icons: ${allIcons.length}`);
```

## Dynamic Icon Selection

```tsx
import { useState } from 'react';
import { Icon, IconName } from 'mingcute-react-native';

function IconSelector() {
  const [selectedIcon, setSelectedIcon] = useState<IconName>('chat_1_fill');
  
  return (
    <Icon 
      name={selectedIcon} 
      size={32} 
      color="#007AFF"
    />
  );
}
```

## Styling with StyleSheet

```tsx
import { StyleSheet, View } from 'react-native';
import { Icon } from 'mingcute-react-native';

const styles = StyleSheet.create({
  iconContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default function StyledIcons() {
  return (
    <View style={styles.iconContainer}>
      <Icon name="settings_fill" size={24} color="#333" />
    </View>
  );
}
```

