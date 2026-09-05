import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Frame36, Frame36Group, Frame36Variant } from './Frame36';

const meta: Meta<typeof Frame36> = {
  title: 'Components/Frame 36',
  component: Frame36,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'gray', 'elevated'],
      description: 'Card state matching Figma Component Set Frame 36 (node-id=31-558)',
    },
    label: {
      control: { type: 'text' },
      description: 'Field selector title label',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Dimension scale variant',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether field is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand to 100% parent container width',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Frame 36\`

- **Exact Figma Layer Name**: \`Frame 36\` (Figma Component Set \`❖ Frame 36\`)
- **Figma Node ID**: \`31:558\` (\`node-id=31-558&t=3uORgYMCpCNKXVgM-0\`)
- **Visual Design**:
  - Squircle dropdown selector pill cards (\`border-radius: 20px\`).
  - Left bold typography: \`"All Fields"\` (\`font-size: 22px\`, \`font-weight: 600\`).
  - Right thick downward chevron arrow (stroke: \`3.2px\`, rounded caps).
  - Component set with 3 state variants:
    1. **Default (\`default\`)**: Pure white flat card (\`#FFFFFF\`) with bold black typography & chevron (\`#000000\`).
    2. **Gray (\`gray\`)**: Medium slate-gray fill (\`#8E8E93\`) with muted charcoal typography & chevron (\`#5A5A5E\`).
    3. **Elevated (\`elevated\`)**: Pure white card (\`#FFFFFF\`) with soft prominent drop shadow (\`0 14px 28px -4px rgba(0,0,0,0.24)\`).

#### State Matrix

| Variant | Surface Fill | Text & Chevron Color | Box Shadow | Figma Visual Spec |
|---|---|---|---|---|
| \`default\` | \`#FFFFFF\` (Pure White) | \`#000000\` (Solid Black) | None (Flat) | Card 1 (Top) |
| \`gray\` | \`#8E8E93\` (Slate Gray) | \`#5A5A5E\` (Muted Charcoal) | None (Flat) | Card 2 (Middle) |
| \`elevated\` | \`#FFFFFF\` (Pure White) | \`#000000\` (Solid Black) | \`0 14px 28px rgba(0,0,0,0.24)\` | Card 3 (Bottom) |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame36>;

/**
 * Exact replica of the Figma artboard Component Set Frame 36 (Node 31:558):
 * Rendered within the authentic purple dashed container with "❖ Frame 36" badge on gray canvas.
 */
export const Default: Story = {
  render: () => <Frame36Group />,
};

export const WhiteFlat: Story = {
  args: {
    variant: 'default',
    label: 'All Fields',
    size: 'md',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    label: 'All Fields',
    size: 'md',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    label: 'All Fields',
    size: 'md',
  },
};

const sampleOptions = [
  'All Fields',
  'Computer Science & AI',
  'Engineering & Robotics',
  'Business & Management',
  'Medicine & Healthcare',
  'Design & Architecture',
  'Arts & Humanities',
];

export const InteractiveDropdown: Story = {
  render: () => {
    const [selectedField, setSelectedField] = useState('All Fields');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', minHeight: '340px' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          Selected field: <strong style={{ color: '#0F172A' }}>{selectedField}</strong> (Click to open dropdown)
        </p>
        <Frame36
          variant="elevated"
          label={selectedField}
          size="md"
          options={sampleOptions}
          onSelect={(opt) => setSelectedField(opt)}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-start', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (220 &times; 52px, font: 17px)
        </p>
        <Frame36 size="sm" variant="default" label="All Fields" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (280 &times; 68px, font: 22px) &mdash; Exact Figma Spec (Node 31:558)
        </p>
        <Frame36 size="md" variant="default" label="All Fields" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (340 &times; 82px, font: 26px)
        </p>
        <Frame36 size="lg" variant="elevated" label="All Fields" />
      </div>
    </div>
  ),
};
