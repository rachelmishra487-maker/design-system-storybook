import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component2Frame18 } from './Frame18';

const meta: Meta<typeof Component2Frame18> = {
  title: 'Components/Component 2/Frame 18',
  component: Component2Frame18,
  tags: ['autodocs'],
  argTypes: {
    directionLabel: {
      control: { type: 'text' },
      description: 'Text for primary action on the left',
    },
    callLabel: {
      control: { type: 'text' },
      description: 'Text for secondary action on the right',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button bar dimension scale',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand container to fill 100% of parent width',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable user interactions',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 2/Frame 18\`

- **Exact Figma Layer Name**: \`Component 2/Frame 18\`
- **Figma Node ID**: \`4:30\` (\`node-id=4-30&t=3uORgYMCpCNKXVgM-0\`)
- **Dimensions**: \`266 × 46 Hug\`
- **Visual Design**:
  - Dual action segmented button bar.
  - **Left action ("Direction")**: Burnt orange / terracotta background (\`#C2410C\`) with crisp white bold text.
  - **Right action ("Call")**: Clean white surface (\`#FFFFFF\`) with deep dark charcoal text (\`#0F172A\`).
  - **Gap**: \`12px\` transparent spacing between both actions exposing the container/canvas background.
  - **Border Radius**: \`0px\` sharp geometric edges.

#### Component Property Aliasing Table

| Element | Property | Figma Value / Token | Notes |
|---|---|---|---|
| Frame Dimensions | \`width\` &times; \`height\` | \`266px\` &times; \`46px\` | Exact \`Hug\` dimensions from Figma |
| Action Gap | \`gap\` | \`12px\` | Spacer between Direction and Call |
| Direction Button | \`background-color\` | \`#C2410C\` (\`orange.700\`) | White bold text (\`#FFFFFF\`) |
| Call Button | \`background-color\` | \`#FFFFFF\` (\`base.white\`) | Dark charcoal bold text (\`#0F172A\`) |
| Corner Radius | \`border-radius\` | \`0px\` | Sharp rectangular block design |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component2Frame18>;

/**
 * Exact replica of Component 2/Frame 18 on the gray canvas frame (266 × 46px)
 */
export const Default: Story = {
  render: (args) => (
    <div className="uedp-frame-18-canvas-frame">
      <Component2Frame18 {...args} />
    </div>
  ),
  args: {
    directionLabel: 'Direction',
    callLabel: 'Call',
    size: 'md',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [lastAction, setLastAction] = useState<string>('None');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '32px' }}>
        <div className="uedp-frame-18-canvas-frame">
          <Component2Frame18
            {...args}
            onDirectionClick={() => setLastAction('Direction Clicked!')}
            onCallClick={() => setLastAction('Call Clicked!')}
          />
        </div>
        <div style={{
          padding: '8px 18px',
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          color: '#334155'
        }}>
          Last Action: <strong>{lastAction}</strong>
        </div>
      </div>
    );
  },
  args: {
    directionLabel: 'Direction',
    callLabel: 'Call',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start', padding: '24px' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (220 &times; 38px)
        </p>
        <Component2Frame18 size="sm" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (266 &times; 46px) - Figma Spec (Node 4:30)
        </p>
        <Component2Frame18 size="md" />
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (320 &times; 54px)
        </p>
        <Component2Frame18 size="lg" />
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '500px', padding: '24px', backgroundColor: '#D3D3D3', borderRadius: '8px' }}>
      <Component2Frame18 fullWidth />
    </div>
  ),
};
