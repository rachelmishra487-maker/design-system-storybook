import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Controlled checked state matching Figma Checkbox (node-id=2-24)',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Sizing scale variant',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Render crisp white checkmark SVG when checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional label text alongside checkbox',
    },
    labelPosition: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      description: 'Position of label relative to checkbox',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Checkbox\`

- **Exact Figma Layer Name**: \`Checkbox\` (Figma Component Set \`❖ Checkbox\`)
- **Figma Node ID**: \`2:24\` (\`node-id=2-24&t=3uORgYMCpCNKXVgM-0\`)
- **Visual Design**:
  - Squircle indicator control (\`border-radius: 18px\`, \`60 × 60px\` at scale).
  - Used both standalone and embedded in \`Frame 2\` selection cards.
  - Component set with 2 authentic visual states:
    1. **Checked (\`checked=true\`)**: Solid golden-amber fill (\`#FFB800\`).
    2. **Unchecked (\`checked=false\`)**: Pure white fill (\`#FFFFFF\`) with \`2.5px solid #FFB800\` golden-amber border.

#### State Matrix

| State | Surface Fill | Border Style | Box Shadow | Figma Spec (Node 2:24) |
|---|---|---|---|---|
| \`checked\` | \`#FFB800\` (Amber 500) | \`2.5px solid #FFB800\` | \`0 4px 12px rgba(255,184,0,0.22)\` | Top Variant |
| \`unchecked\` | \`#FFFFFF\` (Pure White) | \`2.5px solid #FFB800\` | \`0 2px 6px rgba(0,0,0,0.04)\` | Bottom Variant |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/**
 * Exact replica of Figma artboard Component Set Checkbox (Node 2:24):
 * Rendered within the purple dashed container with "❖ Checkbox" badge on gray canvas.
 */
export const Default: Story = {
  render: () => <CheckboxGroup />,
};

export const Checked: Story = {
  args: {
    checked: true,
    size: 'md',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    size: 'md',
  },
};

export const Interactive: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          State: <strong style={{ color: isChecked ? '#D97706' : '#64748B' }}>{isChecked ? 'Checked (Amber Fill)' : 'Unchecked (Amber Outline)'}</strong> &mdash; Click to toggle
        </p>
        <div style={{ padding: '32px', backgroundColor: '#C8CBD0', borderRadius: '16px' }}>
          <Checkbox
            checked={isChecked}
            onChange={(val) => setIsChecked(val)}
            size="md"
          />
        </div>
      </div>
    );
  },
};

export const WithCheckmarkIcon: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#64748B', fontSize: '13px', margin: 0 }}>
          Optional icon mode (<code>showIcon=true</code>)
        </p>
        <div style={{ padding: '32px', backgroundColor: '#C8CBD0', borderRadius: '16px' }}>
          <Checkbox
            checked={isChecked}
            onChange={(val) => setIsChecked(val)}
            showIcon={true}
            size="md"
          />
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(true);

    return (
      <div style={{ padding: '24px' }}>
        <Checkbox
          checked={isChecked}
          onChange={(val) => setIsChecked(val)}
          label="Apply to universities"
          size="md"
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-start', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (24 &times; 24px) &mdash; Standard Compact Form UI
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Checkbox size="sm" checked={true} />
          <Checkbox size="sm" checked={false} />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (60 &times; 60px) &mdash; Exact Figma Spec (Node 2:24)
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Checkbox size="md" checked={true} />
          <Checkbox size="md" checked={false} />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (72 &times; 72px) &mdash; Prominent Display
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Checkbox size="lg" checked={true} />
          <Checkbox size="lg" checked={false} />
        </div>
      </div>
    </div>
  ),
};
