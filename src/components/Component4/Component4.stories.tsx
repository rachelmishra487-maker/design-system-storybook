import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component4, Component4Group } from './Component4';

const meta: Meta<typeof Component4> = {
  title: 'Components/Component 4',
  component: Component4,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['white', 'yellow', 'gray'],
      description: 'Visual color variant matching Figma Component 4',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button scale size',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Toggle Google multi-color SVG icon',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand button to fill 100% of parent width',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable button interactions',
    },
    children: {
      control: { type: 'text' },
      description: 'Button text label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 4\`

- **Exact Figma Layer Name**: \`Component 4\`
- **Figma Node ID**: \`23:524\` (\`node-id=23-524&t=3uORgYMCpCNKXVgM-0\`)
- **Visual Design**:
  - Elevated rounded rectangular button with generous rounded corners (\`border-radius: 18px\`).
  - Distinctive soft pillowy drop shadow: \`box-shadow: 0 12px 28px -4px rgba(0,0,0,0.24)\`.
  - Leading authentic 4-color Google "G" vector logo (\`#4285F4\`, \`#34A853\`, \`#FBBC05\`, \`#EA4335\`).
  - Bold sans-serif typography (\`Inter\`, 700 bold).
  - Three distinct color variants with specific text color rules:
    1. **White (\`#FFFFFF\`)**: Black text (\`#000000\`).
    2. **Yellow / Amber (\`#FFB800\`)**: White text (\`#FFFFFF\`).
    3. **Gray (\`#8C8C8C\`)**: White text (\`#FFFFFF\`).

#### Component Property Aliasing Table

| Variant | Background Fill | Typography Color | Icon | Figma Spec (Node ID: 23:524) |
|---|---|---|---|---|
| \`white\` | \`#FFFFFF\` | \`#000000\` (Black) | Google 4-Color | Top elevated button |
| \`yellow\` | \`#FFB800\` (\`amber.500\`) | \`#FFFFFF\` (White) | Google 4-Color | Middle elevated button |
| \`gray\` | \`#8C8C8C\` (\`neutral.500\`) | \`#FFFFFF\` (White) | Google 4-Color | Bottom elevated button |
| Shape | Rounded pillowy | \`border-radius: 18px\` | — | Generous corner radius with soft shadow |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component4>;

/**
 * Exact replica of the 3 elevated Google buttons stacked on a gray canvas as in Figma Node 23:524
 */
export const Default: Story = {
  render: () => (
    <div className="uedp-component-4-canvas-frame">
      <Component4Group />
    </div>
  ),
};

export const White: Story = {
  args: {
    variant: 'white',
    size: 'md',
    children: 'Google',
    showIcon: true,
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    size: 'md',
    children: 'Google',
    showIcon: true,
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    size: 'md',
    children: 'Google',
    showIcon: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '32px 0' }}>
        <Component4
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
          Signed in: <strong>{clickCount}</strong> times | Active Variant: <strong style={{ textTransform: 'capitalize' }}>{args.variant || 'white'}</strong>
        </div>
      </div>
    );
  },
  args: {
    variant: 'yellow',
    size: 'md',
    children: 'Google',
    showIcon: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', alignItems: 'flex-start', padding: '20px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (220 &times; 56px)
        </p>
        <Component4 variant="white" size="sm">Google</Component4>
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (290 &times; 72px) - Figma Spec (Node 23:524)
        </p>
        <Component4 variant="yellow" size="md">Google</Component4>
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (350 &times; 84px)
        </p>
        <Component4 variant="gray" size="lg">Google</Component4>
      </div>
    </div>
  ),
};

export const AllVariantsInline: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '28px',
      padding: '40px',
      backgroundColor: '#D3D3D3',
      borderRadius: '12px',
      justifyContent: 'center'
    }}>
      <Component4 variant="white">Google</Component4>
      <Component4 variant="yellow">Google</Component4>
      <Component4 variant="gray">Google</Component4>
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    variant: 'yellow',
    size: 'md',
    showIcon: false,
    children: 'Google',
  },
};
