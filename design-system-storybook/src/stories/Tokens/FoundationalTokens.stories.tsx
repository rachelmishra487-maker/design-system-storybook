import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const radiiTokens = [
  { name: '--uedp-rounded-none', val: '0px', id: 'VariableID:201:none' },
  { name: '--uedp-rounded-sm', val: '4px', id: 'VariableID:201:sm' },
  { name: '--uedp-rounded-md', val: '8px', id: 'VariableID:201:md' },
  { name: '--uedp-rounded-lg', val: '12px', id: 'VariableID:201:lg' },
  { name: '--uedp-rounded-xl', val: '16px', id: 'VariableID:201:xl' },
  { name: '--uedp-rounded-2xl', val: '20px', id: 'VariableID:201:2xl' },
  { name: '--uedp-rounded-3xl', val: '24px', id: 'VariableID:201:3xl' },
  { name: '--uedp-rounded-full', val: '9999px', id: 'VariableID:201:full' },
];

const spacingTokens = [
  { name: '--uedp-gap-1', val: '4px', id: 'VariableID:202:1' },
  { name: '--uedp-gap-2', val: '8px', id: 'VariableID:202:2' },
  { name: '--uedp-gap-3', val: '12px', id: 'VariableID:202:3' },
  { name: '--uedp-gap-4', val: '16px', id: 'VariableID:202:4' },
  { name: '--uedp-gap-6', val: '24px', id: 'VariableID:202:6' },
  { name: '--uedp-gap-8', val: '32px', id: 'VariableID:202:8' },
  { name: '--uedp-gap-12', val: '48px', id: 'VariableID:202:12' },
];

const shadowTokens = [
  { name: '--uedp-shadow-sm', id: 'VariableID:204:sm' },
  { name: '--uedp-shadow-md', id: 'VariableID:204:md' },
  { name: '--uedp-shadow-lg', id: 'VariableID:204:lg' },
  { name: '--uedp-shadow-xl', id: 'VariableID:204:xl' },
];

const FoundationalTokensComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--uedp-slate-900)', margin: '0 0 8px 0' }}>
          📐 Foundational Tokens Showcase
        </h1>
        <p style={{ color: 'var(--uedp-slate-600)', fontSize: '15px', margin: 0 }}>
          Geometry, border radii, spacing scales, and shadow tokens extracted from <code>foundational-tokens.json</code>.
        </p>
      </div>

      {/* Border Radii */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--uedp-slate-800)', marginBottom: '16px' }}>
          Border Radius Scale
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          {radiiTokens.map((t) => (
            <div key={t.name} style={{
              border: '1px solid var(--uedp-slate-200)',
              padding: '16px',
              borderRadius: 'var(--uedp-rounded-xl)',
              background: '#fff',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--uedp-blue-500)',
                margin: '0 auto 12px auto',
                borderRadius: `var(${t.name})`
              }} />
              <code style={{ fontSize: '12px', fontWeight: 700, color: 'var(--uedp-blue-600)' }}>{t.name}</code>
              <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)', marginTop: '4px' }}>{t.val} ({t.id})</div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing Scales */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--uedp-slate-800)', marginBottom: '16px' }}>
          Gap & Spacing Scales
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {spacingTokens.map((s) => (
            <div key={s.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 16px',
              background: '#fff',
              border: '1px solid var(--uedp-slate-200)',
              borderRadius: 'var(--uedp-rounded-lg)'
            }}>
              <code style={{ width: '140px', fontSize: '13px', fontWeight: 700, color: 'var(--uedp-blue-600)' }}>{s.name}</code>
              <span style={{ width: '60px', fontSize: '12px', color: 'var(--uedp-slate-500)' }}>{s.val}</span>
              <div style={{
                height: '24px',
                width: `var(${s.name})`,
                background: 'var(--uedp-indigo-600)',
                borderRadius: '4px'
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Elevation & Shadows */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--uedp-slate-800)', marginBottom: '16px' }}>
          Shadow & Elevation Tokens
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
          {shadowTokens.map((sh) => (
            <div key={sh.name} style={{
              padding: '24px',
              background: '#fff',
              borderRadius: 'var(--uedp-rounded-2xl)',
              boxShadow: `var(${sh.name})`,
              textAlign: 'center',
              border: '1px solid var(--uedp-slate-100)'
            }}>
              <code style={{ fontSize: '13px', fontWeight: 700, color: 'var(--uedp-blue-600)' }}>{sh.name}</code>
              <div style={{ fontSize: '11px', color: 'var(--uedp-slate-500)', marginTop: '6px' }}>{sh.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/FoundationalTokens',
  component: FoundationalTokensComponent,
  parameters: {
    docs: {
      description: {
        component: `
### Foundational Tokens Reference Table

| Category | CSS Variable | Figma Variable ID | Default Value |
|---|---|---|---|
| Border Radius | \`--uedp-rounded-3xl\` | \`VariableID:201:3xl\` | \`24px\` |
| Border Radius | \`--uedp-rounded-xl\` | \`VariableID:201:xl\` | \`16px\` |
| Spacing Gap | \`--uedp-gap-4\` | \`VariableID:202:4\` | \`16px\` |
| Padding | \`--uedp-padding-6\` | \`VariableID:203:6\` | \`24px\` |
| Elevation | \`--uedp-shadow-lg\` | \`VariableID:204:lg\` | \`0 10px 15px -3px ...\` |
        `
      }
    }
  }
};

export default meta;

export const Default: StoryObj = {};
