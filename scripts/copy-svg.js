const fs = require('fs');
const path = require('path');

const SVG_SOURCE_DIR = path.join(__dirname, '..', 'src', 'svg');
const SVG_OUTPUT_DIR = path.join(__dirname, '..', 'lib', 'svg');

function copySvgFiles() {
  if (!fs.existsSync(SVG_SOURCE_DIR)) {
    console.log('No SVG files to copy');
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(SVG_OUTPUT_DIR)) {
    fs.mkdirSync(SVG_OUTPUT_DIR, { recursive: true });
  }

  // Copy all SVG files
  const files = fs.readdirSync(SVG_SOURCE_DIR);
  let copied = 0;

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const sourcePath = path.join(SVG_SOURCE_DIR, file);
      const destPath = path.join(SVG_OUTPUT_DIR, file);
      fs.copyFileSync(sourcePath, destPath);
      copied++;
    }
  });

  console.log(`Copied ${copied} SVG files to lib/svg/`);
}

copySvgFiles();

