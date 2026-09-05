import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Card, CardGroup, CardVariant } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['white', 'gray'],
      description: 'Card color variant matching Figma Card (node-id=32-620)',
    },
    label: {
      control: { type: 'text' },
      description: 'Uppercase category/metric title',
    },
    value: {
      control: { type: 'text' },
      description: 'Primary highlighted metric value',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Dimension scale variant',
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['center', 'left'],
      description: 'Content alignment',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Card\`

- **Exact Figma Layer Name**: \`Card\` (Figma Component Set \`❖ Card\`)
- **Figma Node ID**: \`32:620\` (\`node-id=32-620&t=3uORgYMCpCNKXVgM-0\`)
- **Figma Variant Count**: \`2 Variants\`
- **Visual Design**:
  - Vertical squircle card (\`border-radius: 38px\`, \`260 × 300px\`).
  - Leading black circular clock icon (\`44px\` diameter circle with crisp white clock hands).
  - Uppercase gray category label: \`"DURATION"\` (\`font-size: 21px\`, \`font-weight: 600\`, uppercase with \`0.05em\` letter spacing).
  - Bold black value: \`"4 Years"\` (\`font-size: 32px\`, \`font-weight: 700\`).
  - Two distinct color variants:
    1. **White (\`white\` / Top)**: Pure white surface (\`#FFFFFF\`) with soft dark drop shadow.
    2. **Gray (\`gray\` / Bottom)**: Medium slate-gray surface (\`#8E8E93\`) with soft dark drop shadow.

#### State Matrix

| Variant | Surface Fill | Icon | Label Typography | Value Typography | Box Shadow |
|---|---|---|---|---|---|
| \`white\` | \`#FFFFFF\` | Black Clock (44px) | \`"DURATION"\` (#6B7280) | \`"4 Years"\` (#000000 700) | \`0 14px 28px rgba(0,0,0,0.16)\` |
| \`gray\` | \`#8E8E93\` | Black Clock (44px) | \`"DURATION"\` (#475569) | \`"4 Years"\` (#000000 700) | \`0 14px 28px rgba(0,0,0,0.20)\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/**
 * Exact replica of Figma artboard Component Set Card (Node 32:620):
 * Rendered within the purple dashed container with "❖ Card" header and "2 Variants" footer badge on gray canvas.
 */
export const Default: Story = {
  render: () => <CardGroup />,
};

export const White: Story = {
  args: {
    variant: 'white',
    label: 'DURATION',
    value: '4 Years',
    size: 'md',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    label: 'DURATION',
    value: '4 Years',
    size: 'md',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<CardVariant>('white');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          Selected card: <strong style={{ color: '#0F172A', textTransform: 'capitalize' }}>{selected}</strong> (Click any card to select)
        </p>
        <div style={{ display: 'flex', gap: '24px', padding: '36px', backgroundColor: '#C8CBD0', borderRadius: '16px' }}>
          <Card
            variant="white"
            label="DURATION"
            value="4 Years"
            onClick={() => setSelected('white')}
            style={{ outline: selected === 'white' ? '3px solid #8B5CF6' : 'none', outlineOffset: '4px' }}
          />
          <Card
            variant="gray"
            label="DURATION"
            value="4 Years"
            onClick={() => setSelected('gray')}
            style={{ outline: selected === 'gray' ? '3px solid #8B5CF6' : 'none', outlineOffset: '4px' }}
          />
        </div>
      </div>
    );
  },
};

export const DifferentMetrics: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '36px', backgroundColor: '#C8CBD0', borderRadius: '16px', justifyContent: 'center' }}>
      <Card variant="white" label="DURATION" value="4 Years" />
      <Card variant="gray" label="TUITION" value="$38,500" />
      <Card variant="white" label="INTAKE" value="Fall 2026" />
      <Card variant="gray" label="DEGREE" value="Bachelor" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-end', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (200 &times; 230px, radius: 28px)
        </p>
        <Card size="sm" variant="white" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (260 &times; 300px, radius: 38px) &mdash; Exact Figma Spec (Node 32:620)
        </p>
        <Card size="md" variant="white" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (320 &times; 370px, radius: 46px)
        </p>
        <Card size="lg" variant="gray" />
      </div>
    </div>
  ),
};
