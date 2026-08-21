import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'link'],
      description: 'Visual hierarchy variant matching Figma Component Set (Node ID: 4:30)',
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
    loading: {
      control: { type: 'boolean' },
      description: 'Display interactive loading spinner',
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
### Figma Component Spec: \`Button\` (Node ID: \`4:30\`)

- **Figma Layer Name**: \`Button\`
- **Figma Node ID**: \`4:30\` (\`NodeID:4:30\`)
- **Component Set ID**: \`ComponentSetID:4:30\`
- **Bound Variable Aliases**:
  - \`primary background\`: \`--uedp-orange-600\` (\`VariableID:137:1240\`)
  - \`primary hover\`: \`--uedp-orange-700\` (\`VariableID:137:1241\`)
  - \`primary pressed\`: \`--uedp-orange-800\` (\`VariableID:137:1242\`)
  - \`text inverse\`: \`--uedp-base-white\` (\`VariableID:137:1000\`)
  - \`secondary surface\`: \`--uedp-neutral-100\` (\`VariableID:137:1020\`)
  - \`border default\`: \`--uedp-neutral-200\` (\`VariableID:137:1021\`)
  - \`border radius md\`: \`--uedp-border-radius-rounded-md\` (\`VariableID:137:1551\`)
  - \`gap md\`: \`--uedp-gap-2\` (\`VariableID:137:1558\`)
  - \`disabled opacity\`: \`--uedp-opacity-50\` (\`VariableID:137:1575\`)

#### Variant Specification Table

| Variant | Background CSS Variable | Text Color Variable | Hover State Variable | Figma Variable ID |
|---|---|---|---|---|
| **Primary** | \`--uedp-orange-600\` | \`--uedp-base-white\` | \`--uedp-orange-700\` | \`VariableID:137:1240\` |
| **Secondary** | \`--uedp-neutral-100\` | \`--uedp-neutral-900\` | \`--uedp-neutral-200\` | \`VariableID:137:1020\` |
| **Outline** | \`transparent\` | \`--uedp-neutral-800\` | \`--uedp-orange-50\` | \`VariableID:137:1022\` |
| **Ghost** | \`transparent\` | \`--uedp-neutral-700\` | \`--uedp-neutral-100\` | \`VariableID:137:1026\` |
| **Danger** | \`--uedp-red-600\` | \`--uedp-base-white\` | \`--uedp-red-700\` | \`VariableID:137:1130\` |
| **Link** | \`transparent\` | \`--uedp-orange-600\` | \`--uedp-orange-700\` | \`VariableID:137:1240\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Action',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Action',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Destructive Action',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    children: 'Text Link Action',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" size="xs">Extra Small (xs)</Button>
      <Button variant="primary" size="sm">Small (sm)</Button>
      <Button variant="primary" size="md">Medium (md)</Button>
      <Button variant="primary" size="lg">Large (lg)</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" iconLeft={<span>★</span>}>
        Leading Icon
      </Button>
      <Button variant="secondary" iconRight={<span>→</span>}>
        Trailing Icon
      </Button>
      <Button variant="outline" size="icon">
        🔍
      </Button>
    </div>
  ),
};

export const LoadingState: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'Saving Changes...',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled Action',
  },
};
