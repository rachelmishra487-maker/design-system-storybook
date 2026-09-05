import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component2, Component2Group } from './Component2';

const meta: Meta<typeof Component2> = {
  title: 'Components/Component 2',
  component: Component2,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['white', 'yellow', 'gray'],
      description: 'Visual color variant matching Figma Component 2',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button dimension scale',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand button to fill 100% width of parent container',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable user interaction',
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
### Preserved Figma Layer Spec: \`Component 2\`

- **Exact Figma Layer Name**: \`Component 2\`
- **Figma Node ID**: \`22:459\` (\`node-id=22-459&t=3uORgYMCpCNKXVgM-0\`)
- **Visual Design**:
  - Rectangular block button design with sharp/crisp corners (\`border-radius: 0px\`).
  - Solid black bold typography (\`#000000\`, weight: 700, \`text: "button"\`) centered in each variant.
  - Three distinct color variants:
    1. **White (\`#FFFFFF\`)**: Clean white surface with black text.
    2. **Yellow / Amber (\`#FFB800\`)**: Vibrant golden-amber surface with black text.
    3. **Gray (\`#949494\`)**: Solid medium-gray surface with black text.

#### Component Property Aliasing Table

| Variant | Background Fill | Typography Color | Figma Spec (Node ID: 22:459) |
|---|---|---|---|
| \`white\` | \`#FFFFFF\` | \`#000000\` | Top rectangular button |
| \`yellow\` | \`#FFB800\` (\`amber.500\`) | \`#000000\` | Middle rectangular button |
| \`gray\` | \`#949494\` (\`neutral.400\`) | \`#000000\` | Bottom rectangular button |
| Shape | Flat block | \`border-radius: 0px\` | Crisp rectangular geometric edges |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component2>;

/**
 * Exact replica of the 3-button stack on gray artboard as displayed in Figma Node 22:459
 */
export const Default: Story = {
  render: () => (
    <div className="uedp-component-2-canvas-frame">
      <Component2Group />
    </div>
  ),
};

export const White: Story = {
  args: {
    variant: 'white',
    size: 'md',
    children: 'button',
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    size: 'md',
    children: 'button',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    size: 'md',
    children: 'button',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '24px 0' }}>
        <Component2
          {...args}
          onClick={() => setClickCount((prev) => prev + 1)}
        />
        <div style={{
          padding: '8px 16px',
          backgroundColor: '#F1F5F9',
          border: '1px solid #CBD5E1',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#334155',
          fontFamily: 'Inter, sans-serif'
        }}>
          Clicked: <strong>{clickCount}</strong> times | Variant: <strong style={{ textTransform: 'capitalize' }}>{args.variant || 'white'}</strong>
        </div>
      </div>
    );
  },
  args: {
    variant: 'yellow',
    size: 'md',
    children: 'button',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (200 &times; 48px)
        </p>
        <Component2 variant="yellow" size="sm">button</Component2>
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (280 &times; 64px) - Figma Spec
        </p>
        <Component2 variant="yellow" size="md">button</Component2>
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (340 &times; 76px)
        </p>
        <Component2 variant="yellow" size="lg">button</Component2>
      </div>
    </div>
  ),
};

export const AllVariantsInline: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      padding: '32px',
      backgroundColor: '#D3D3D3',
      borderRadius: '8px',
      justifyContent: 'center'
    }}>
      <Component2 variant="white">button</Component2>
      <Component2 variant="yellow">button</Component2>
      <Component2 variant="gray">button</Component2>
    </div>
  ),
};
