import type { Meta, StoryObj } from '@storybook/react';
import { Zones } from './Zones';

const meta: Meta<typeof Zones> = {
  title: 'Components/Zones',
  component: Zones,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Section title label' },
    selectedZoneId: { control: 'text', description: 'Active selected zone ID' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Zones\`

- **Exact Figma Layer Name**: \`Zones\`
- **Figma Node ID**: \`NodeID:340:ZonesGridFrame\`
- **Bound Variable Aliases**:
  - \`frame-background\`: \`--uedp-slate-900\` (\`VariableID:101:900\`)
  - \`card-background\`: \`--uedp-slate-800\` (\`VariableID:101:800\`)
  - \`active-border-color\`: \`--uedp-blue-500\` (\`VariableID:102:500\`)
  - \`progress-fill\`: \`--uedp-blue-500\` (\`VariableID:102:500\`)
- **Unbound Raw Values**:
  - \`card-min-width\`: \`220px\`
  - \`progress-bar-height\`: \`4px\`

#### Component Property Aliasing Table

| Element | Property | Bound Variable | Figma Alias ID |
|---|---|---|---|
| Outer Frame | \`background-color\` | \`--uedp-slate-900\` | \`VariableID:101:900\` |
| Zone Card | \`background-color\` | \`--uedp-slate-800\` | \`VariableID:101:800\` |
| Active Card Highlight | \`border-color\` | \`--uedp-blue-500\` | \`VariableID:102:500\` |
| Latency Font | \`font-family\` | \`--uedp-fontFamily-mono\` | \`VariableID:205:mono\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Zones>;

export const Default: Story = {
  args: {
    title: 'Global Availability Zones',
    selectedZoneId: 'zone-us-east',
  },
};
