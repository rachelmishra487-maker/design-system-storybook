import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Frame34, Frame34Group, Frame34Variant } from './Frame34';

const meta: Meta<typeof Frame34> = {
  title: 'Components/Frame 34',
  component: Frame34,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'gray', 'elevated'],
      description: 'Search card visual variant matching Figma Frame 34 (node-id=31-521)',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder search input text',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Search bar dimension scale',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable search input',
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
### Preserved Figma Layer Spec: \`Frame 34\`

- **Exact Figma Layer Name**: \`Frame 34\` (Figma Component Set \`❖ Frame 34\`)
- **Figma Node ID**: \`31:521\` (\`node-id=31-521&t=3uORgYMCpCNKXVgM-0\`)
- **Figma Variant Count**: \`3 Variants\`
- **Visual Design**:
  - Elongated search pill card (\`border-radius: 24px\`, \`560 × 76px\`).
  - Leading search magnifying glass icon (\`28px\` with \`3.2px\` rounded stroke).
  - Modern typography: \`"Search for your dream course"\` (\`font-size: 24px\`, \`font-weight: 500\`).
  - Three distinct variant states:
    1. **Default (\`default\` / Top)**: Flat pure white surface (\`#FFFFFF\`) with black icon and text.
    2. **Gray (\`gray\` / Middle)**: Medium slate-gray surface (\`#8E8E93\`) with muted charcoal icon and text (\`#545458\`).
    3. **Elevated (\`elevated\` / Bottom)**: Pure white surface (\`#FFFFFF\`) with soft prominent elevated drop shadow.

#### State Matrix

| Variant | Surface Fill | Search Icon | Typography Color | Box Shadow |
|---|---|---|---|---|
| \`default\` | \`#FFFFFF\` (Pure White) | Solid Black | \`#000000\` (Solid Black) | None (Flat) |
| \`gray\` | \`#8E8E93\` (Slate Gray) | Muted Charcoal | \`#545458\` (Muted Charcoal) | None (Flat) |
| \`elevated\` | \`#FFFFFF\` (Pure White) | Solid Black | \`#000000\` (Solid Black) | \`0 16px 32px rgba(0,0,0,0.22)\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame34>;

/**
 * Exact replica of Figma artboard Component Set Frame 34 (Node 31:521):
 * Rendered within the purple dashed container with "❖ Frame 34" header on gray canvas.
 */
export const Default: Story = {
  render: () => <Frame34Group />,
};

export const WhiteFlat: Story = {
  args: {
    variant: 'default',
    placeholder: 'Search for your dream course',
    size: 'md',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    placeholder: 'Search for your dream course',
    size: 'md',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    placeholder: 'Search for your dream course',
    size: 'md',
  },
};

export const InteractiveSearch: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');

    const sampleCourses = [
      'Master of Business Administration (MBA)',
      'Computer Science & Software Engineering',
      'Biomedical & Health Sciences',
      'Artificial Intelligence & Robotics',
      'Architecture & Urban Design',
    ];

    const filteredCourses = searchTerm
      ? sampleCourses.filter((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
      : sampleCourses;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <Frame34
          variant="elevated"
          placeholder="Search for your dream course..."
          value={searchTerm}
          onChange={(val) => setSearchTerm(val)}
          fullWidth
        />

        <div style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          border: '1px solid #E2E8F0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '12px 18px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontSize: '13px', fontWeight: 600, color: '#64748B' }}>
            {searchTerm ? `Results for "${searchTerm}" (${filteredCourses.length})` : 'Popular Programs'}
          </div>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((c) => (
              <div
                key={c}
                onClick={() => setSearchTerm(c)}
                style={{
                  padding: '14px 18px',
                  borderBottom: '1px solid #F1F5F9',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F172A',
                  transition: 'background-color 0.15s'
                }}
              >
                {c}
              </div>
            ))
          ) : (
            <div style={{ padding: '24px', textAlign: 'center', color: '#94A3B8', fontSize: '15px' }}>
              No matching courses found.
            </div>
          )}
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
          Small (420 &times; 56px, font: 18px)
        </p>
        <Frame34 size="sm" variant="default" placeholder="Search for your dream course" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (560 &times; 76px, font: 24px) &mdash; Exact Figma Spec (Node 31:521)
        </p>
        <Frame34 size="md" variant="default" placeholder="Search for your dream course" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (680 &times; 90px, font: 28px)
        </p>
        <Frame34 size="lg" variant="elevated" placeholder="Search for your dream course" />
      </div>
    </div>
  ),
};
