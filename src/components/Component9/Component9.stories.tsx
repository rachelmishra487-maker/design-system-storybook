import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component9, Component9Group, Component9Variant } from './Component9';

const meta: Meta<typeof Component9> = {
  title: 'Components/Component 9',
  component: Component9,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['active', 'inactive'],
      description: 'Visual card variant matching Figma Component 9 (node-id=29-447)',
    },
    title: {
      control: { type: 'text' },
      description: 'Heading title',
    },
    description: {
      control: { type: 'text' },
      description: 'Body descriptive paragraph',
    },
    imageSrc: {
      control: { type: 'text' },
      description: 'Campus hero image source URL',
    },
    actionLabel: {
      control: { type: 'text' },
      description: 'Action link button label',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Dimension scale variant',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand to 100% container width',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 9\`

- **Exact Figma Layer Name**: \`Component 9\` (Figma Component Set \`❖ Component 9\`)
- **Figma Node ID**: \`29:447\` (\`node-id=29-447&t=3uORgYMCpCNKXVgM-0\`)
- **Figma Variant Count**: \`2 Variants\` (\`Active\` & \`Inactive\`)
- **Visual Design**:
  - Vertical profile card layout with rounded corners (\`border-radius: 36px\`, \`360 × 500px\`).
  - Hero campus photo at the top (\`210px\` height) with warm overlaid institution watermark.
  - Two-line heading: \`"About the\\nInstitution"\` (\`font-size: 28px\`, \`font-weight: 700\`).
  - Detailed body description paragraph (\`font-size: 15px\`, \`line-height: 1.55\`).
  - Right-aligned \`"Read More"\` action link button.
  - Two distinct visual variants:
    1. **Active (\`active\` / Left)**: Pure white surface (\`#FFFFFF\`) with high-contrast black typography and full-color hero photo.
    2. **Inactive (\`inactive\` / Right)**: Medium slate-gray surface (\`#8E8E93\`) with muted typography and dimmed desaturated photo.

#### State Matrix

| Variant | Surface Fill | Hero Image Styling | Typography Color | Action Link |
|---|---|---|---|---|
| \`active\` | \`#FFFFFF\` (Pure White) | Vibrant full-color photo | \`#000000\` (Solid Black) | \`#0F172A\` (Dark Navy) |
| \`inactive\` | \`#8E8E93\` (Slate Gray) | Desaturated (35% gray, 85% brightness) | \`#374151\` (Muted Slate) | \`#374151\` (Muted Slate) |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component9>;

/**
 * Exact replica of Figma artboard Component Set Component 9 (Node 29:447):
 * Active and Inactive cards side-by-side inside the purple dashed container with "❖ Component 9" header.
 */
export const Default: Story = {
  render: () => <Component9Group />,
};

export const Active: Story = {
  args: {
    variant: 'active',
    size: 'md',
  },
};

export const Inactive: Story = {
  args: {
    variant: 'inactive',
    size: 'md',
  },
};

export const InteractiveReadMore: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          Click "Read More" to toggle extended academic description
        </p>
        <Component9
          variant="active"
          size="md"
          actionLabel={expanded ? 'Read Less' : 'Read More'}
          description={
            expanded
              ? 'Founded in 1827, the University of Toronto has evolved into Canada’s leading institution of learning, discovery, and knowledge creation. We are one of the world’s top research-intensive universities, driven to invent and innovate. With over 900 programs of study across three campuses, U of T offers unmatched breadth and depth of opportunity.'
              : 'Founded in 1827, the University of Toronto has evolved into Canada’s leading institution of learning, discovery, and knowledge creation. We are one of the world’s top research-intensive universities, driven to invent and innovate.'
          }
          onActionClick={() => setExpanded(!expanded)}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start', padding: '16px', justifyContent: 'center' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (300 &times; 420px)
        </p>
        <Component9 size="sm" variant="active" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (360 &times; 500px) &mdash; Exact Figma Spec (Node 29:447)
        </p>
        <Component9 size="md" variant="active" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (420 &times; 580px)
        </p>
        <Component9 size="lg" variant="inactive" />
      </div>
    </div>
  ),
};
