import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Frame31, Frame31Group, Frame31Variant } from './Frame31';

const meta: Meta<typeof Frame31> = {
  title: 'Components/Frame 31',
  component: Frame31,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['amber', 'neutral', 'elevated'],
      description: 'Border & shadow state matching Figma Frame 31 (node-id=31-492)',
    },
    title: {
      control: { type: 'text' },
      description: 'Main card heading',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Supporting description text',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card dimension scale',
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
### Preserved Figma Layer Spec: \`Frame 31\`

- **Exact Figma Layer Name**: \`Frame 31\` (Figma Component Set \`❖ Frame 31\`)
- **Figma Node ID**: \`31:492\` (\`node-id=31-492&t=3uORgYMCpCNKXVgM-0\`)
- **Figma Variant Count**: \`3 Variants\`
- **Visual Design**:
  - Capsule-shaped squircle card (\`border-radius: 52px\`).
  - Light silvery-gray surface fill (\`#DCE0E5\`).
  - Bold black typography: \`"Business Administration"\` (\`font-size: 30px\`, \`font-weight: 700\`).
  - Supporting subtitle: \`"Rotman School of Management excellence"\` (\`font-size: 19px\`, \`font-weight: 400\`).
  - Three distinct variant states:
    1. **Amber (\`amber\` / Top)**: \`4.5px solid #FFB800\` (Golden-Amber) border with soft shadow.
    2. **Neutral (\`neutral\` / Middle)**: \`3.5px solid #B4BAC2\` (Slate-Gray) border with soft shadow.
    3. **Elevated (\`elevated\` / Bottom)**: \`5px solid #FFB800\` (Golden-Amber) border with prominent warm elevated drop shadow.

#### State Matrix

| Variant | Surface Fill | Border Style | Box Shadow | Figma Spec (Node 31:492) |
|---|---|---|---|---|
| \`amber\` | \`#DCE0E5\` (Silvery Gray) | \`4.5px solid #FFB800\` | \`0 10px 24px -4px rgba(0,0,0,0.16)\` | Top Variant |
| \`neutral\` | \`#DCE0E5\` (Silvery Gray) | \`3.5px solid #B4BAC2\` | \`0 10px 24px -4px rgba(0,0,0,0.14)\` | Middle Variant |
| \`elevated\` | \`#DCE0E5\` (Silvery Gray) | \`5px solid #FFB800\` | \`0 16px 36px -4px rgba(0,0,0,0.28)\` + amber glow | Bottom Variant |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame31>;

/**
 * Exact replica of Figma artboard Component Set Frame 31 (Node 31:492):
 * Rendered within the purple dashed container with "❖ Frame 31" header and "3 Variants" footer badge on gray canvas.
 */
export const Default: Story = {
  render: () => <Frame31Group />,
};

export const AmberBorder: Story = {
  args: {
    variant: 'amber',
    title: 'Business Administration',
    subtitle: 'Rotman School of Management excellence',
    size: 'md',
  },
};

export const NeutralBorder: Story = {
  args: {
    variant: 'neutral',
    title: 'Business Administration',
    subtitle: 'Rotman School of Management excellence',
    size: 'md',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Business Administration',
    subtitle: 'Rotman School of Management excellence',
    size: 'md',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedVariant, setSelectedVariant] = useState<Frame31Variant>('amber');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '14px', margin: 0 }}>
          Active variant: <strong style={{ color: '#0F172A' }}>{selectedVariant}</strong> (Click any card to select)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '36px', backgroundColor: '#C8CBD0', borderRadius: '16px' }}>
          <Frame31
            variant="amber"
            title="Business Administration"
            subtitle="Rotman School of Management excellence"
            onClick={() => setSelectedVariant('amber')}
          />
          <Frame31
            variant="neutral"
            title="Computer Science & Data"
            subtitle="Faculty of Arts & Science innovation"
            onClick={() => setSelectedVariant('neutral')}
          />
          <Frame31
            variant="elevated"
            title="Biomedical Engineering"
            subtitle="Faculty of Applied Science & Engineering"
            onClick={() => setSelectedVariant('elevated')}
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-start', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (420 &times; 130px, radius: 40px)
        </p>
        <Frame31 size="sm" variant="amber" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (540 &times; 165px, radius: 52px) &mdash; Exact Figma Spec (Node 31:492)
        </p>
        <Frame31 size="md" variant="amber" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (640 &times; 195px, radius: 60px)
        </p>
        <Frame31 size="lg" variant="elevated" />
      </div>
    </div>
  ),
};
