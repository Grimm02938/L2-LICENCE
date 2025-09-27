import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = process.cwd();
const IGNORE_DIRS = new Set([
  '.git',
  'node_modules',
  'dist',
  '.vs',
  '.vscode',
  '.firebase',
  '.idea',
  '.nx',
  'coverage'
]);

const EXTENSION_MAP = new Map([
  ['.ts', 'TypeScript'],
  ['.tsx', 'TypeScript'],
  ['.js', 'JavaScript'],
  ['.jsx', 'JavaScript'],
  ['.vue', 'Vue'],
  ['.css', 'CSS'],
  ['.scss', 'SCSS'],
  ['.sass', 'SCSS'],
  ['.html', 'HTML'],
  ['.md', 'Markdown'],
  ['.json', 'JSON'],
  ['.py', 'Python'],
  ['.bat', 'Batch'],
  ['.mjs', 'JavaScript'],
  ['.tsconfig', 'JSON'],
]);

const counts = new Map();
let total = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const name = entry.name;
    if (name.startsWith('.git')) continue;
    if (IGNORE_DIRS.has(name)) continue;
    const fullPath = join(dir, name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile()) {
      const ext = extname(name).toLowerCase();
      const lang = EXTENSION_MAP.get(ext);
      if (!lang) continue;
      const content = await readFile(fullPath, 'utf8');
      const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0).length;
      counts.set(lang, (counts.get(lang) ?? 0) + lines);
      total += lines;
    }
  }
}

(async () => {
  await walk(ROOT);
  const result = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([lang, lines]) => ({
      language: lang,
      lines,
      percent: total === 0 ? 0 : (lines / total) * 100
    }));

  console.log('Language breakdown based on non-empty lines of code:\n');
  for (const { language, lines, percent } of result) {
    console.log(`${language.padEnd(15)} ${lines.toString().padStart(6)} lines  ${percent.toFixed(1)}%`);
  }
  console.log(`\nTotal counted lines: ${total}`);
})();
