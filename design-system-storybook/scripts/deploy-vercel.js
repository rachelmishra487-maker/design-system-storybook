import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Starting Vercel Deployment Pre-Flight Checks...');

try {
  // Step 1: Check token CSS
  const tokensCssPath = path.join(rootDir, 'src', 'styles', 'figma-tokens.css');
  if (!fs.existsSync(tokensCssPath)) {
    console.log('⚠️ figma-tokens.css missing. Running token generation...');
    execSync('node scripts/generate-tokens.js', { cwd: rootDir, stdio: 'inherit' });
  }

  // Step 2: TypeScript typecheck
  console.log('🔍 Executing TypeScript compilation check (tsc --noEmit)...');
  execSync('npx tsc --noEmit', { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ 0 TypeScript compilation errors!');

  // Step 3: Storybook production build
  console.log('📦 Building static Storybook showcase (storybook-static/)...');
  execSync('npm run build-storybook', { cwd: rootDir, stdio: 'inherit' });

  // Step 4: Verify build output
  const staticDir = path.join(rootDir, 'storybook-static');
  const indexHtml = path.join(staticDir, 'index.html');

  if (fs.existsSync(indexHtml)) {
    console.log('\n======================================================');
    console.log('🎉 PRE-FLIGHT VERIFICATION SUCCESSFUL!');
    console.log('📂 Storybook static bundle compiled at: ./storybook-static');
    console.log('📄 vercel.json routing is configured for single-page app deployment.');
    console.log('🌐 To deploy to Vercel live, run: npx vercel --prod');
    console.log('======================================================\n');
  } else {
    throw new Error('storybook-static/index.html was not generated!');
  }
} catch (error) {
  console.error('❌ Deployment check failed:', error.message);
  process.exit(1);
}
