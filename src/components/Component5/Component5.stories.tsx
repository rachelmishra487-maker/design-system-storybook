import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component5, Component5Group } from './Component5';

const meta: Meta<typeof Component5> = {
  title: 'Components/Component 5',
  component: Component5,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['yellow', 'gray'],
      description: 'Visual color variant matching Figma Component 5 (2 Variants)',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card dimension scale',
    },
    title: {
      control: { type: 'text' },
      description: 'Main heading text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Secondary guidance subtitle',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 5\`

- **Exact Figma Layer Name**: \`Component 5\`
- **Figma Node ID**: \`24:551\` (\`node-id=24-551&t=3uORgYMCpCNKXVgM-0\`)
- **Figma Set Metadata**: \`2 Variants\` (Yellow & Gray)
- **Visual Design**:
  - Ultra-rounded squircle card layout (\`border-radius: 52px\`).
  - Leading authentic Visa brand wordmark in dark navy blue (\`#1A1F71\`) at top-left.
  - Large bold white title: \`"Visa Help"\` (\`font-size: 32px\`, weight: 800).
  - Clear white subtitle: \`"Instant guidance"\` (\`font-size: 20px\`, weight: 500).
  - Two distinct color variants:
    1. **Yellow (\`#FFB800\`)**: Vibrant golden-amber squircle surface.
    2. **Gray (\`#8E8E93\`)**: Medium slate-gray squircle surface.

#### Component Property Aliasing Table

| Variant | Surface Fill | Header Logo | Title Typography | Subtitle Typography | Corner Radius |
|---|---|---|---|---|---|
| \`yellow\` | \`#FFB800\` (\`amber.500\`) | Visa (\`#1A1F71\`) | \`"Visa Help"\` (White 800) | \`"Instant guidance"\` (White 500) | \`52px\` Squircle |
| \`gray\` | \`#8E8E93\` (\`neutral.400\`) | Visa (\`#1A1F71\`) | \`"Visa Help"\` (White 800) | \`"Instant guidance"\` (White 500) | \`52px\` Squircle |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component5>;

/**
 * Exact replica of the 2-variant stack on gray artboard as displayed in Figma Node 24:551
 */
export const Default: Story = {
  render: () => (
    <div className="uedp-component-5-canvas-frame">
      <Component5Group />
    </div>
  ),
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    size: 'md',
    title: 'Visa Help',
    subtitle: 'Instant guidance',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    size: 'md',
    title: 'Visa Help',
    subtitle: 'Instant guidance',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '32px 0' }}>
        <Component5
          {...args}
          onClick={() => setClickCount((prev) => prev + 1)}
        />
        <div style={{
          padding: '8px 16px',
          backgroundColor: '#F1F5F9',
          border: '1px solid #CBD5E1',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#334155',
          fontFamily: 'Inter, sans-serif'
        }}>
          Help Requested: <strong>{clickCount}</strong> times | Card Variant: <strong style={{ textTransform: 'capitalize' }}>{args.variant || 'yellow'}</strong>
        </div>
      </div>
    );
  },
  args: {
    variant: 'yellow',
    size: 'md',
    title: 'Visa Help',
    subtitle: 'Instant guidance',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start', padding: '24px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (240 &times; 250px)
        </p>
        <Component5 variant="yellow" size="sm" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (290 &times; 310px) - Figma Spec (Node 24:551)
        </p>
        <Component5 variant="yellow" size="md" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (350 &times; 375px)
        </p>
        <Component5 variant="gray" size="lg" />
      </div>
    </div>
  ),
};

export const BothVariantsInline: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px',
      padding: '40px',
      backgroundColor: '#D3D3D3',
      borderRadius: '16px',
      justifyContent: 'center'
    }}>
      <Component5 variant="yellow" title="Visa Help" subtitle="Instant guidance" />
      <Component5 variant="gray" title="Visa Help" subtitle="Instant guidance" />
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    variant: 'yellow',
    size: 'md',
    title: 'Priority Assist',
    subtitle: '24/7 dedicated support',
  },
};
