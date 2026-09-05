import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Component3 } from './Component3';

const meta: Meta<typeof Component3> = {
  title: 'Components/Component 3',
  component: Component3,
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Active step index (1-based)',
    },
    totalSteps: {
      control: { type: 'number', min: 2, max: 8 },
      description: 'Total step count',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Circle sizing variant',
    },
    lineOverhang: {
      control: { type: 'boolean' },
      description: 'Decorative line extension before first and after last step',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 3\`

- **Exact Figma Layer Name**: \`Component 3\`
- **Figma Node ID**: \`0:1\` (\`node-id=0-1&p=f&t=3uORgYMCpCNKXVgM-0\`)
- **Type**: Stepper / Progress Step Indicator
- **Visual Design**:
  - Horizontal solid black track line running continuously through all step nodes with terminal overhangs.
  - **Step 1 (Completed)**: Solid Figma Golden-Amber (\`#FFB800\`) circle with bold white number \`1\`.
  - **Step 2 (Active)**: Solid Figma Coral-Orange (\`#FF5722\`) circle with bold white number \`2\` and translucent aura halo (\`box-shadow: 0 0 0 7px rgba(255, 87, 34, 0.28)\`).
  - **Step 3 (Upcoming)**: Solid Figma Off-White / Soft Slate (\`#EEF2F6\`) circle with bold dark slate number \`3\` (\`#0F172A\`).
  - **Step 4 (Upcoming)**: Solid Figma Off-White / Soft Slate (\`#EEF2F6\`) circle with bold dark slate number \`4\` (\`#0F172A\`).

#### Component Property Aliasing Table

| Element | Property | Figma Value / Token | Notes |
|---|---|---|---|
| Track Line | \`background-color\` | \`#000000\` | Continuous central baseline |
| Step 1 Circle (Completed) | \`background-color\` | \`#FFB800\` | White bold text |
| Step 2 Circle (Active) | \`background-color\` | \`#FF5722\` | White bold text |
| Step 2 Halo Ring | \`box-shadow\` | \`0 0 0 7px rgba(255, 87, 34, 0.28)\` | Active indicator aura |
| Steps 3 & 4 (Upcoming) | \`background-color\` | \`#EEF2F6\` | Dark slate bold text (\`#0F172A\`) |
| Circle Dimensions | \`width\`, \`height\` | \`56px\` / \`56px\` (md) | Circular \`border-radius: 50%\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component3>;

/**
 * Exact match to Figma component node-id=0-1
 * Step 1: Golden Amber (Completed)
 * Step 2: Coral Orange with Halo (Active)
 * Step 3: Off-White (Upcoming)
 * Step 4: Off-White (Upcoming)
 */
export const Default: Story = {
  args: {
    currentStep: 2,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const Step1Active: Story = {
  args: {
    currentStep: 1,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const Step3Active: Story = {
  args: {
    currentStep: 3,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const Step4Active: Story = {
  args: {
    currentStep: 4,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const AllCompleted: Story = {
  args: {
    currentStep: 5,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [step, setStep] = useState(args.currentStep || 2);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '20px 0' }}>
        <Component3 {...args} currentStep={step} onStepClick={(s) => setStep(s)} />
        <div style={{
          padding: '8px 16px',
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#475569',
          fontFamily: 'Inter, sans-serif'
        }}>
          Current Active: <strong style={{ color: '#FF5722' }}>Step {step}</strong> (Click any step circle to navigate)
        </div>
      </div>
    );
  },
  args: {
    currentStep: 2,
    totalSteps: 4,
    size: 'md',
    lineOverhang: true,
  },
};

export const WithLabels: Story = {
  args: {
    currentStep: 2,
    size: 'md',
    lineOverhang: true,
    steps: [
      { number: 1, label: 'Discovery' },
      { number: 2, label: 'Design Tokens' },
      { number: 3, label: 'Component Build' },
      { number: 4, label: 'Deployment' },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%', padding: '16px 0' }}>
      <div>
        <p style={{ margin: '0 0 12px 16px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Small (42px)
        </p>
        <Component3 currentStep={2} totalSteps={4} size="sm" />
      </div>
      <div>
        <p style={{ margin: '0 0 12px 16px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Medium (56px) - Figma Spec (Node 0:1)
        </p>
        <Component3 currentStep={2} totalSteps={4} size="md" />
      </div>
      <div>
        <p style={{ margin: '0 0 12px 16px', fontSize: '13px', color: '#64748B', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          Large (68px)
        </p>
        <Component3 currentStep={2} totalSteps={4} size="lg" />
      </div>
    </div>
  ),
};
