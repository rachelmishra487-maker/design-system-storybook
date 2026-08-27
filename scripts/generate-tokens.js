import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const baseTokensPath = fs.existsSync(path.join(rootDir, 'base-palette-full.json'))
  ? path.join(rootDir, 'base-palette-full.json')
  : path.join(rootDir, 'base-palette-tokens.json');

const foundTokensPath = fs.existsSync(path.join(rootDir, 'foundational-tokens-full.json'))
  ? path.join(rootDir, 'foundational-tokens-full.json')
  : path.join(rootDir, 'foundational-tokens.json');

const outputCssPath = path.join(rootDir, 'src', 'styles', 'figma-tokens.css');

function sanitizeKey(k) {
  return k.replace(/[\s,]+/g, '-').toLowerCase();
}

function flattenTokens(obj, prefix = '') {
  let cssVars = [];
  let tokenMap = {};

  for (const rawKey in obj) {
    if (rawKey === 'name' || rawKey === 'version' || rawKey === '$extensions' || rawKey === '$type') continue;
    const item = obj[rawKey];
    const key = sanitizeKey(rawKey);

    if (item && typeof item === 'object') {
      if ('$value' in item) {
        // It's a token node
        let val = item['$value'];
        const figmaId = item['com.figma.variableId'] || item['$extensions']?.['com.figma.variableId'] || '';
        
        // If value is a number (e.g. radius or spacing), format with px if not 0 or unitless
        if (typeof val === 'number') {
          if (val === 0) val = '0px';
          else val = `${val}px`;
        }

        const cleanPrefix = prefix ? `${prefix}-` : '';
        const varName = `--uedp-${cleanPrefix}${key}`;
        
        cssVars.push(`  ${varName}: ${val}; /* ${figmaId} */`);
        tokenMap[varName] = { value: val, figmaId, type: item['$type'] };
      } else {
        // Recurse deeper
        const nestedPrefix = prefix ? `${prefix}-${key}` : key;
        const res = flattenTokens(item, nestedPrefix);
        cssVars.push(...res.cssVars);
        Object.assign(tokenMap, res.tokenMap);
      }
    }
  }

  return { cssVars, tokenMap };
}

function main() {
  console.log('🔄 Extracting comprehensive Figma variables and generating CSS tokens...');

  let cssOutput = `/**
 * AUTO-GENERATED FIGMA CSS TOKENS
 * Derived from Figma Tokens Files with 1:1 Variable ID Aliasing
 */

:root {\n`;

  if (fs.existsSync(baseTokensPath)) {
    const baseData = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
    const sourceObj = baseData.tokens ? baseData.tokens : baseData;
    const { cssVars } = flattenTokens(sourceObj);
    cssOutput += `  /* Base Color Palette Tokens */\n` + cssVars.join('\n') + '\n\n';
  }

  if (fs.existsSync(foundTokensPath)) {
    const foundData = JSON.parse(fs.readFileSync(foundTokensPath, 'utf8'));
    const sourceObj = foundData.tokens ? foundData.tokens : foundData;
    const { cssVars } = flattenTokens(sourceObj);
    cssOutput += `  /* Foundational Geometry, Radius & Spacing Tokens */\n` + cssVars.join('\n') + '\n';
  }

  // Ensure default font families and shadows
  cssOutput += `
  /* Elevation, Shadows & Typography */
  --uedp-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* VariableID:204:sm */
  --uedp-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* VariableID:204:md */
  --uedp-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* VariableID:204:lg */
  --uedp-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* VariableID:204:xl */
  --uedp-fontFamily-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* VariableID:205:sans */
  --uedp-fontFamily-mono: 'Fira Code', monospace; /* VariableID:205:mono */
}\n`;

  // Ensure output folder exists
  const targetDir = path.dirname(outputCssPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(outputCssPath, cssOutput, 'utf8');
  console.log(`✅ Enhanced CSS Tokens generated successfully at: ${outputCssPath}`);
}

main();
