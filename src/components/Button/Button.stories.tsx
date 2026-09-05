import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonNavigationPair } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['next', 'back', 'primary', 'secondary', 'outline', 'ghost', 'danger', 'link'],
      description: 'Visual hierarchy variant matching Figma Component Set (Node ID: 2:75 & 4:30)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'icon'],
      description: 'Button scale size property',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Expand button to 100% of parent container width',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable interactive click events',
    },
    children: {
      control: { type: 'text' },
      description: 'Button label content',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Button\`

- **Exact Figma Layer Name**: \`Button\`
- **Figma Node ID**: \`2:75\` (\`node-id=2-75&t=3uORgYMCpCNKXVgM-0\`) & \`4:30\`
- **Visual Design**:
  - **\`next\`**: Sharp rectangular block button (\`border-radius: 0px\`) with a warm golden-amber gradient fill (\`linear-gradient(180deg, #FFA800 0%, #FFC425 100%)\`) and lowercase slate-gray text (\`#5E6472\`, font-size: \`26px\`, weight: \`600\`).
  - **\`Back\`**: Transparent text action button with medium-gray typography (\`#9CA3AF\`, font-size: \`26px\`, weight: \`500\`).
  - **Navigation Pair**: Co-located wizard/stepper navigation layout pairing \`Back\` and \`next\`.

#### Component Property Aliasing Table

| Variant | Background Fill | Typography Color | Border Radius | Figma Spec (Node ID: 2:75) |
|---|---|---|---|---|
| \`next\` | Amber Gradient (\`#FFA800\` &rarr; \`#FFC425\`) | Slate Gray (\`#5E6472\`) | \`0px\` | Primary flow forward action |
| \`back\` | \`transparent\` | Muted Gray (\`#9CA3AF\`) | \`0px\` | Secondary flow reverse action |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Exact replica of the 4-button view (two Back + next pairs) as displayed on the gray canvas in Figma Node 2:75
 */
export const Default: Story = {
  render: () => (
    <div className="uedp-button-canvas-frame">
      <ButtonNavigationPair />
      <ButtonNavigationPair />
    </div>
  ),
};

export const Next: Story = {
  args: {
    variant: 'next',
    children: 'next',
  },
};

export const Back: Story = {
  args: {
    variant: 'back',
    children: 'Back',
  },
};

export const NavigationPair: Story = {
  render: () => (
    <div style={{ padding: '36px', backgroundColor: '#D3D3D3', borderRadius: '12px', display: 'inline-flex' }}>
      <ButtonNavigationPair />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    const maxSteps = 4;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center', padding: '32px' }}>
        <div style={{
          padding: '12px 24px',
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          color: '#334155'
        }}>
          Current Step: <strong style={{ color: '#FFA800' }}>Step {step}</strong> of {maxSteps}
        </div>
        <div style={{ padding: '32px 40px', backgroundColor: '#D3D3D3', borderRadius: '12px' }}>
          <ButtonNavigationPair
            onBack={() => setStep((prev) => Math.max(1, prev - 1))}
            onNext={() => setStep((prev) => Math.min(maxSteps, prev + 1))}
          />
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start', padding: '16px' }}>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Figma Node 2:75 Navigation Buttons
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '24px', backgroundColor: '#D3D3D3', borderRadius: '8px' }}>
          <Button variant="back">Back</Button>
          <Button variant="next">next</Button>
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Standard Hierarchy Variants (Node 4:30)
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  ),
};
