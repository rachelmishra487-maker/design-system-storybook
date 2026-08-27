import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const FIGMA_PAT = process.env.FIGMA_PAT || '<YOUR_FIGMA_PERSONAL_ACCESS_TOKEN>';
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'nIQ2z7fDwrAq189abiZCER';

async function fetchFigmaCanvasDiscovery() {
  console.log(`🌐 Querying Figma REST API for File Key: ${FIGMA_FILE_KEY}...`);

  if (!FIGMA_PAT || FIGMA_PAT.includes('<YOUR_FIGMA_PERSONAL')) {
    console.log('ℹ️ No live FIGMA_PAT provided in environment. Utilizing preserved local Figma layer catalog.');
    return;
  }

  try {
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_PAT,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API returned status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Discovered Figma File: "${data.name}"`);
    console.log(`📄 Canvas Pages Count: ${data.document?.children?.length || 0}`);

    const catalogPath = path.join(rootDir, 'figma-discovery-catalog.json');
    fs.writeFileSync(catalogPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`💾 Saved canvas node catalog to: ${catalogPath}`);
  } catch (err) {
    console.error('⚠️ Figma API Fetch Notice:', err.message);
  }
}

fetchFigmaCanvasDiscovery();
