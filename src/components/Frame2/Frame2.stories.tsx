import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Frame2, Frame2Group, Frame2State } from './Frame2';

const meta: Meta<typeof Frame2> = {
  title: 'Components/Frame 2',
  component: Frame2,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['filled', 'outline', 'gray'],
      description: 'Indicator state matching Figma Frame 2 (node-id=2-10)',
    },
    title: {
      control: { type: 'text' },
      description: 'Selection card title label',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Pill card dimension scale',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Stretch card to 100% container width',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Frame 2\`

- **Exact Figma Layer Name**: \`Frame 2\`
- **Figma Node ID**: \`2:10\` (\`node-id=2-10&t=3uORgYMCpCNKXVgM-0\`)
- **Visual Design**:
  - Horizontal elongated white pill container (\`border-radius: 44px\`).
  - Left indicator squircle (\`border-radius: 18px\`, \`60x60px\`).
  - Bold typography: \`"Apply to universities"\` (\`font-size: 28px\`, weight: 700, deep navy \`#0F172A\`).
  - 3 distinct visual states:
    1. **Filled (\`state='filled'\`)**: Solid golden-amber squircle (\`#FFB800\`).
    2. **Outline (\`state='outline'\`)**: White squircle with 2.5px golden-amber border (\`#FFB800\`).
    3. **Gray (\`state='gray'\`)**: Slate-gray squircle (\`#8E8E93\`) with 2.5px golden-amber border (\`#FFB800\`).

#### State Matrix

| State | Indicator Fill | Indicator Border | Text Label | Text Color |
|---|---|---|---|---|
| \`filled\` | \`#FFB800\` (Amber 500) | \`2.5px solid #FFB800\` | \`"Apply to universities"\` | \`#0F172A\` |
| \`outline\` | \`#FFFFFF\` (White) | \`2.5px solid #FFB800\` | \`"Apply to universities"\` | \`#0F172A\` |
| \`gray\` | \`#8E8E93\` (Slate-Gray) | \`2.5px solid #FFB800\` | \`"Apply to universities"\` | \`#0F172A\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame2>;

/**
 * Exact replica of the 3-card stack on gray canvas as displayed in Figma Node 2:10 ("Frame 2")
 */
export const Default: Story = {
  render: () => (
    <div className="uedp-frame-2-canvas-frame">
      <div className="uedp-frame-2-canvas-label">Frame 2</div>
      <Frame2Group />
    </div>
  ),
};

export const Filled: Story = {
  args: {
    state: 'filled',
    title: 'Apply to universities',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    state: 'outline',
    title: 'Apply to universities',
    size: 'md',
  },
};

export const Gray: Story = {
  args: {
    state: 'gray',
    title: 'Apply to universities',
    size: 'md',
  },
};

export const InteractiveSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Frame2State>('filled');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          Active state: <strong style={{ color: '#0F172A' }}>{selected}</strong> (Click any card to select)
        </p>
        <div className="uedp-frame-2-canvas-frame">
          <div className="uedp-frame-2-canvas-label">Frame 2 &bull; Interactive</div>
          <div className="uedp-frame-2-group">
            {(['filled', 'outline', 'gray'] as Frame2State[]).map((st) => (
              <Frame2
                key={st}
                state={st}
                title="Apply to universities"
                onClick={() => setSelected(st)}
                style={{
                  outline: selected === st ? '3px solid #FFB800' : 'none',
                  outlineOffset: '4px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (width: 380px, font: 21px, indicator: 46px)
        </p>
        <Frame2 size="sm" state="filled" title="Apply to universities" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (width: 480px, font: 28px, indicator: 60px) &mdash; Exact Figma Spec (Node 2:10)
        </p>
        <Frame2 size="md" state="filled" title="Apply to universities" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (width: 560px, font: 34px, indicator: 72px)
        </p>
        <Frame2 size="lg" state="filled" title="Apply to universities" />
      </div>
    </div>
  ),
};
