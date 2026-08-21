import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const colorFamilies = [
  {
    name: 'Slate (Neutral Dark / Text)',
    tokens: [
      { name: '--uedp-slate-50', hex: '#f8fafc', figmaId: 'VariableID:101:50' },
      { name: '--uedp-slate-100', hex: '#f1f5f9', figmaId: 'VariableID:101:100' },
      { name: '--uedp-slate-200', hex: '#e2e8f0', figmaId: 'VariableID:101:200' },
      { name: '--uedp-slate-300', hex: '#cbd5e1', figmaId: 'VariableID:101:300' },
      { name: '--uedp-slate-400', hex: '#94a3b8', figmaId: 'VariableID:101:400' },
      { name: '--uedp-slate-500', hex: '#64748b', figmaId: 'VariableID:101:500' },
      { name: '--uedp-slate-600', hex: '#475569', figmaId: 'VariableID:101:600' },
      { name: '--uedp-slate-700', hex: '#334155', figmaId: 'VariableID:101:700' },
      { name: '--uedp-slate-800', hex: '#1e293b', figmaId: 'VariableID:101:800' },
      { name: '--uedp-slate-900', hex: '#0f172a', figmaId: 'VariableID:101:900' },
      { name: '--uedp-slate-950', hex: '#020617', figmaId: 'VariableID:101:950' },
    ],
  },
  {
    name: 'Blue (Primary Action)',
    tokens: [
      { name: '--uedp-blue-50', hex: '#eff6ff', figmaId: 'VariableID:102:50' },
      { name: '--uedp-blue-100', hex: '#dbeafe', figmaId: 'VariableID:102:100' },
      { name: '--uedp-blue-200', hex: '#bfdbfe', figmaId: 'VariableID:102:200' },
      { name: '--uedp-blue-300', hex: '#93c5fd', figmaId: 'VariableID:102:300' },
      { name: '--uedp-blue-400', hex: '#60a5fa', figmaId: 'VariableID:102:400' },
      { name: '--uedp-blue-500', hex: '#3b82f6', figmaId: 'VariableID:102:500' },
      { name: '--uedp-blue-600', hex: '#2563eb', figmaId: 'VariableID:102:600' },
      { name: '--uedp-blue-700', hex: '#1d4ed8', figmaId: 'VariableID:102:700' },
      { name: '--uedp-blue-800', hex: '#1e40af', figmaId: 'VariableID:102:800' },
      { name: '--uedp-blue-900', hex: '#1e3a8a', figmaId: 'VariableID:102:900' },
    ],
  },
  {
    name: 'Indigo (Accent / Brand)',
    tokens: [
      { name: '--uedp-indigo-500', hex: '#6366f1', figmaId: 'VariableID:103:500' },
      { name: '--uedp-indigo-600', hex: '#4f46e5', figmaId: 'VariableID:103:600' },
      { name: '--uedp-indigo-700', hex: '#4338ca', figmaId: 'VariableID:103:700' },
    ],
  },
  {
    name: 'Emerald (Success)',
    tokens: [
      { name: '--uedp-emerald-100', hex: '#d1fae5', figmaId: 'VariableID:104:100' },
      { name: '--uedp-emerald-500', hex: '#10b981', figmaId: 'VariableID:104:500' },
      { name: '--uedp-emerald-600', hex: '#059669', figmaId: 'VariableID:104:600' },
    ],
  },
  {
    name: 'Amber (Warning)',
    tokens: [
      { name: '--uedp-amber-100', hex: '#fef3c7', figmaId: 'VariableID:105:100' },
      { name: '--uedp-amber-500', hex: '#f59e0b', figmaId: 'VariableID:105:500' },
      { name: '--uedp-amber-600', hex: '#d97706', figmaId: 'VariableID:105:600' },
    ],
  },
  {
    name: 'Rose (Danger)',
    tokens: [
      { name: '--uedp-rose-100', hex: '#ffe4e6', figmaId: 'VariableID:106:100' },
      { name: '--uedp-rose-500', hex: '#f43f5e', figmaId: 'VariableID:106:500' },
      { name: '--uedp-rose-600', hex: '#e11d48', figmaId: 'VariableID:106:600' },
    ],
  },
];

const ColorPaletteComponent: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--uedp-slate-900)', margin: '0 0 8px 0' }}>
          🎨 Base Color Palette Tokens
        </h1>
        <p style={{ color: 'var(--uedp-slate-600)', fontSize: '15px', margin: 0 }}>
          Extracted directly from <code>base-palette-tokens.json</code> mapped with Figma Variable IDs.
          Click any swatch to copy its CSS custom property.
        </p>
        {copied && (
          <div style={{
            marginTop: '12px',
            padding: '8px 16px',
            background: 'var(--uedp-emerald-100)',
            color: 'var(--uedp-emerald-600)',
            borderRadius: '6px',
            fontWeight: 600,
            display: 'inline-block'
          }}>
            ✓ Copied to clipboard: <code>{copied}</code>
          </div>
        )}
      </div>

      {colorFamilies.map((family) => (
        <div key={family.name} style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--uedp-slate-800)', marginBottom: '16px' }}>
            {family.name}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {family.tokens.map((token) => (
              <div
                key={token.name}
                onClick={() => copyToClipboard(token.name)}
                style={{
                  border: '1px solid var(--uedp-slate-200)',
                  borderRadius: 'var(--uedp-rounded-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#fff',
                  boxShadow: 'var(--uedp-shadow-sm)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
              >
                <div style={{
                  height: '90px',
                  backgroundColor: `var(${token.name})`,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  padding: '8px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    color: 'var(--uedp-slate-900)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {token.hex}
                  </span>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <code style={{ fontSize: '12px', fontWeight: 700, color: 'var(--uedp-blue-600)' }}>
                    {token.name}
                  </code>
                  <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)', marginTop: '4px' }}>
                    {token.figmaId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/ColorPalette',
  component: ColorPaletteComponent,
  parameters: {
    docs: {
      description: {
        component: `
### Color Palette Specification Table

| Family | CSS Variable | Figma Variable ID | Default Hex |
|---|---|---|---|
| Slate | \`--uedp-slate-900\` | \`VariableID:101:900\` | \`#0f172a\` |
| Slate | \`--uedp-slate-600\` | \`VariableID:101:600\` | \`#475569\` |
| Blue | \`--uedp-blue-500\` | \`VariableID:102:500\` | \`#3b82f6\` |
| Indigo | \`--uedp-indigo-600\` | \`VariableID:103:600\` | \`#4f46e5\` |
| Emerald | \`--uedp-emerald-500\` | \`VariableID:104:500\` | \`#10b981\` |
| Amber | \`--uedp-amber-500\` | \`VariableID:105:500\` | \`#f59e0b\` |
| Rose | \`--uedp-rose-500\` | \`VariableID:106:500\` | \`#f43f5e\` |
        `
      }
    }
  }
};

export default meta;

export const Default: StoryObj = {};
