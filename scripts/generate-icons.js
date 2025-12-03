const fs = require('fs');
const path = require('path');

const MINGCUTE_SVG_DIR = path.join(__dirname, '..', 'mingcute', 'svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'generated');
const ICON_REGISTRY_FILE = path.join(OUTPUT_DIR, 'icon-registry.ts');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Parse SVG file and extract path data
 */
function parseSVG(svgContent) {
  try {
    const widthMatch = svgContent.match(/width="(\d+)"/);
    const heightMatch = svgContent.match(/height="(\d+)"/);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : 24;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : 24;

    const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
    const paths = [];
    let match;

    while ((match = pathRegex.exec(svgContent)) !== null) {
      const pathElement = match[0];
      const d = match[1];
      const fillMatch = pathElement.match(/fill="([^"]*)"/);
      const fill = fillMatch ? fillMatch[1] : undefined;

      // Skip the transparent background path (usually the first one with complex d)
      if (d && d.length < 500) {
        paths.push({ d, fill: fill || 'currentColor' });
      }
    }

    return {
      width,
      height,
      paths: paths.filter(p => p.d && p.d.trim().length > 0),
    };
  } catch (error) {
    console.error('Error parsing SVG:', error);
    return null;
  }
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
 * Generate TypeScript type for icon names
 */
function generateIconNamesType(iconNames) {
  const sortedNames = [...iconNames].sort();
  return `export type IconName =\n  ${sortedNames.map(name => `'${name}'`).join(' |\n  ')};`;
}

/**
 * Main generation function
 */
function generateIconRegistry() {
  console.log('Scanning for SVG files...');
  const svgFiles = findSVGFiles(MINGCUTE_SVG_DIR);
  console.log(`Found ${svgFiles.length} SVG files`);

  const iconRegistry = {};
  const iconNames = new Set();
  let processed = 0;
  let errors = 0;

  svgFiles.forEach((filePath) => {
    try {
      const svgContent = fs.readFileSync(filePath, 'utf-8');
      const iconData = parseSVG(svgContent);

      if (iconData && iconData.paths.length > 0) {
        const iconName = getIconName(filePath);
        iconRegistry[iconName] = iconData;
        iconNames.add(iconName);
        processed++;
      } else {
        errors++;
        console.warn(`Failed to parse: ${filePath}`);
      }
    } catch (error) {
      errors++;
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log(`Processed: ${processed}, Errors: ${errors}`);

  // Generate the registry file
  const registryContent = `// Auto-generated file. Do not edit manually.
// Generated from MingCute SVG files

import { IconData } from '../icon-registry';

${generateIconNamesType(iconNames)}

const iconRegistry: Record<IconName, IconData> = ${JSON.stringify(iconRegistry, null, 2)};

export function getIconData(name: IconName): IconData | null {
  return iconRegistry[name] || null;
}

export function getAllIconNames(): IconName[] {
  return Object.keys(iconRegistry) as IconName[];
}

export function hasIcon(name: string): name is IconName {
  return name in iconRegistry;
}

export { iconRegistry };
`;

  fs.writeFileSync(ICON_REGISTRY_FILE, registryContent, 'utf-8');
  console.log(`Generated icon registry with ${iconNames.size} icons`);
  console.log(`Output: ${ICON_REGISTRY_FILE}`);
}

// Run the generator
generateIconRegistry();

