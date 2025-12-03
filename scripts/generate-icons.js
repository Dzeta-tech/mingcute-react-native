const fs = require('fs');
const path = require('path');

const MINGCUTE_SVG_DIR = path.join(__dirname, '..', 'mingcute', 'svg');
const SVG_OUTPUT_DIR = path.join(__dirname, '..', 'src', 'svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'generated', 'icons');
const INDEX_FILE = path.join(__dirname, '..', 'src', 'generated', 'index.ts');

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR, { recursive: true });
}

/**
 * Convert icon name to PascalCase component name
 * Example: chat_1_fill -> Chat1Fill
 */
function toPascalCase(name) {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Find all SVG files recursively
 */
function findSVGFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findSVGFiles(filePath, fileList);
    } else if (file.endsWith('.svg')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Generate icon name from file path
 * Example: mingcute/svg/contact/chat_1_fill.svg -> chat_1_fill
 */
function getIconName(filePath) {
  const relativePath = path.relative(MINGCUTE_SVG_DIR, filePath);
  const nameWithoutExt = path.basename(relativePath, '.svg');
  return nameWithoutExt;
}

/**
 * Copy SVG file to output directory
 */
function copySvgFile(sourcePath, iconName) {
  const destPath = path.join(SVG_OUTPUT_DIR, `${iconName}.svg`);
  fs.copyFileSync(sourcePath, destPath);
}

/**
 * Generate individual icon component that imports SVG directly
 */
function generateIconComponent(iconName, componentName) {
  return `import React from 'react';
import IconSvg from '../../svg/${iconName}.svg';

export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  color?: string;
  [key: string]: any;
}

export const ${componentName}: React.FC<IconProps> = (props) => {
  return <IconSvg {...props} />;
};
`;
}

/**
 * Main generation function
 */
function generateIcons() {
  console.log('Scanning for SVG files...');
  const svgFiles = findSVGFiles(MINGCUTE_SVG_DIR);
  console.log(`Found ${svgFiles.length} SVG files`);

  const icons = [];
  let processed = 0;
  let errors = 0;

  svgFiles.forEach((filePath) => {
    try {
      const iconName = getIconName(filePath);
      const componentName = toPascalCase(iconName);
      
      // Copy SVG file
      copySvgFile(filePath, iconName);
      
      // Generate icon component
      const iconComponent = generateIconComponent(iconName, componentName);
      const iconFilePath = path.join(OUTPUT_DIR, `${iconName}.tsx`);
      fs.writeFileSync(iconFilePath, iconComponent, 'utf-8');
      
      icons.push({
        iconName,
        componentName,
      });
      
      processed++;
    } catch (error) {
      errors++;
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log(`Processed: ${processed}, Errors: ${errors}`);

  // Generate index file that exports all icons
  const sortedIcons = [...icons].sort((a, b) => a.iconName.localeCompare(b.iconName));
  
  const indexContent = `// Auto-generated file. Do not edit manually.
// Generated from MingCute SVG files

${sortedIcons
  .map((icon) => `export { ${icon.componentName}, type IconProps as ${icon.componentName}Props } from './icons/${icon.iconName}';`)
  .join('\n')}

// Export all icon names as a type for reference
export type IconName =
${sortedIcons.map((icon) => `  | '${icon.iconName}'`).join('\n')};
`;

  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
  
  console.log(`Generated ${processed} icon components`);
  console.log(`SVG files copied to: ${SVG_OUTPUT_DIR}`);
  console.log(`Icon components in: ${OUTPUT_DIR}`);
  console.log(`Index file: ${INDEX_FILE}`);
}

// Run the generator
generateIcons();
