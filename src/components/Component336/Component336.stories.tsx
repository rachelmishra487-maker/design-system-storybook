import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Component336 } from './Component336';

const meta: Meta<typeof Component336> = {
  title: 'Components/Component 336 (Card)',
  component: Component336,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled', 'brand'],
      description: 'Card container style variant matching Figma Component Set (Node ID: 32:580)',
    },
    title: { control: 'text', description: 'Metric card title' },
    value: { control: 'text', description: 'Primary numeric metric or status text' },
    trendValue: { control: 'text', description: 'Percentage or trend string' },
    trendStatus: {
      control: { type: 'select' },
      options: ['up', 'down', 'neutral'],
      description: 'Indicator direction status',
    },
    badgeVariant: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'danger', 'brand'],
      description: 'Status badge variant color token',
    },
    statusLabel: { control: 'text', description: 'Tag badge label text' },
    iconVariant: {
      control: { type: 'select' },
      options: ['orange', 'blue', 'green', 'purple', 'slate'],
      description: 'Icon avatar background tint',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Target progress indicator percentage',
    },
    subtitle: { control: 'text', description: 'Secondary descriptive text / date comparison' },
    showMenu: { control: 'boolean', description: 'Toggle action dots menu' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 336\` / \`Card\` (Node ID: \`32:580\`)

- **Exact Figma Layer Name**: \`Component 336\`
- **Figma Node ID**: \`32:580\` / \`336\` (\`NodeID:32:580\`)
- **Component Set ID**: \`ComponentSetID:32:580\`
- **Bound Variable Aliases**:
  - \`card background\`: \`--uedp-base-white\` (\`VariableID:137:1000\`)
  - \`card border\`: \`--uedp-neutral-200\` (\`VariableID:137:1021\`)
  - \`card border radius\`: \`--uedp-border-radius-rounded-2xl\` (\`VariableID:137:1554\`)
  - \`card padding\`: \`--uedp-padding-p-6\` (\`VariableID:137:1569\`)
  - \`card gap\`: \`--uedp-gap-4\` (\`VariableID:137:1560\`)
  - \`card title\`: \`--uedp-neutral-600\` (\`VariableID:137:1025\`)
  - \`metric value\`: \`--uedp-neutral-950\` (\`VariableID:137:1029\`)
  - \`positive trend text\`: \`--uedp-green-700\` (\`VariableID:137:1191\`)
  - \`positive trend surface\`: \`--uedp-green-50\` (\`VariableID:137:1185\`)
  - \`negative trend text\`: \`--uedp-red-700\` (\`VariableID:137:1131\`)

#### Component Property Aliasing Table

| Layer Property | CSS Rule | Bound Token Variable | Figma Variable ID |
|---|---|---|---|
| Frame Corner Radius | \`border-radius\` | \`--uedp-border-radius-rounded-2xl\` (16px) | \`VariableID:137:1554\` |
| Container Padding | \`padding\` | \`--uedp-padding-p-6\` (24px) | \`VariableID:137:1569\` |
| Card Surface | \`background-color\` | \`--uedp-base-white\` (#ffffff) | \`VariableID:137:1000\` |
| Card Border | \`border-color\` | \`--uedp-neutral-200\` (#e5e5e5) | \`VariableID:137:1021\` |
| Metric Numeric Text | \`color\` | \`--uedp-neutral-950\` (#0a0a0a) | \`VariableID:137:1029\` |
| Header Title | \`color\` | \`--uedp-neutral-600\` (#525252) | \`VariableID:137:1025\` |
| Positive Trend Badge | \`background-color\` | \`--uedp-green-50\` | \`VariableID:137:1185\` |
| Brand Accent Line | \`border-top-color\` | \`--uedp-orange-600\` | \`VariableID:137:1240\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component336>;

export const RevenueMetric: Story = {
  args: {
    variant: 'elevated',
    title: 'Total Revenue',
    value: '$124,850.00',
    trendValue: '+14.2%',
    trendStatus: 'up',
    statusLabel: 'Active Goal',
    badgeVariant: 'success',
    icon: <span>💰</span>,
    iconVariant: 'green',
    progress: 82,
    subtitle: 'Compared to last month ($109,280)',
    showMenu: true,
  },
};

export const ActiveUsers: Story = {
  args: {
    variant: 'brand',
    title: 'Active Platform Users',
    value: '48,290',
    trendValue: '+8.4%',
    trendStatus: 'up',
    statusLabel: 'Live Traffic',
    badgeVariant: 'brand',
    icon: <span>👥</span>,
    iconVariant: 'orange',
    progress: 94,
    subtitle: '12,400 concurrent sessions today',
    showMenu: true,
  },
};

export const StorageWarning: Story = {
  args: {
    variant: 'outlined',
    title: 'Cluster Storage',
    value: '92.4 %',
    trendValue: '+5.8%',
    trendStatus: 'down',
    statusLabel: 'Near Limit',
    badgeVariant: 'danger',
    icon: <span>⚠️</span>,
    iconVariant: 'slate',
    progress: 92,
    subtitle: 'Threshold reached on node cluster us-east-1',
    showMenu: true,
  },
};

export const ConversionRate: Story = {
  args: {
    variant: 'filled',
    title: 'Checkout Conversion',
    value: '3.82 %',
    trendValue: '+0.6%',
    trendStatus: 'up',
    statusLabel: 'Optimal',
    badgeVariant: 'info',
    icon: <span>📈</span>,
    iconVariant: 'blue',
    progress: 76,
    subtitle: 'Highest conversion rate this quarter',
    showMenu: true,
  },
};

export const CardGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px' }}>
      <Component336
        variant="elevated"
        title="Total Revenue"
        value="$124,850.00"
        trendValue="+14.2%"
        trendStatus="up"
        statusLabel="Goal Met"
        badgeVariant="success"
        icon={<span>💰</span>}
        iconVariant="green"
        progress={85}
        subtitle="Monthly recurring revenue"
      />
      <Component336
        variant="brand"
        title="Active Users"
        value="48,290"
        trendValue="+8.4%"
        trendStatus="up"
        statusLabel="Growing"
        badgeVariant="brand"
        icon={<span>👥</span>}
        iconVariant="orange"
        progress={92}
        subtitle="Across all web & mobile clients"
      />
      <Component336
        variant="outlined"
        title="Server Load"
        value="38.4 %"
        trendValue="-2.1%"
        trendStatus="up"
        statusLabel="Healthy"
        badgeVariant="info"
        icon={<span>⚡</span>}
        iconVariant="blue"
        progress={38}
        subtitle="Global average CPU utilization"
      />
    </div>
  ),
};
