import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: 'Components/Map',
  component: Map,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Map component header title' },
    showControls: { control: 'boolean', description: 'Toggle map zoom controls' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Map\`

- **Exact Figma Layer Name**: \`Map\`
- **Figma Node ID**: \`NodeID:350:GeoMapFrame\`
- **Bound Variable Aliases**:
  - \`outer-bg\`: \`--uedp-slate-950\` (\`VariableID:101:950\`)
  - \`border-color\`: \`--uedp-slate-800\` (\`VariableID:101:800\`)
  - \`online-pin-color\`: \`--uedp-emerald-500\` (\`VariableID:104:500\`)
  - \`warning-pin-color\`: \`--uedp-amber-500\` (\`VariableID:105:500\`)
- **Unbound Raw Values**:
  - \`viewport-height\`: \`380px\`
  - \`landmass-fill\`: \`#1e293b\`

#### Component Property Aliasing Table

| Element | Property | Bound Variable | Figma Alias ID |
|---|---|---|---|
| Outer Frame | \`background-color\` | \`--uedp-slate-950\` | \`VariableID:101:950\` |
| Header Title | \`color\` | \`--uedp-slate-50\` | \`VariableID:101:50\` |
| Online Pin Dot | \`background-color\` | \`--uedp-emerald-500\` | \`VariableID:104:500\` |
| Offline Pin Dot | \`background-color\` | \`--uedp-rose-500\` | \`VariableID:106:500\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    title: 'Global Infrastructure Node Map',
    showControls: true,
  },
};
