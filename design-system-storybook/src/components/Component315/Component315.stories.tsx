import type { Meta, StoryObj } from '@storybook/react';
import { Component315 } from './Component315';

const meta: Meta<typeof Component315> = {
  title: 'Components/Component 315',
  component: Component315,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Table title string' },
    subtitle: { control: 'text', description: 'Header description subtitle' },
    compact: { control: 'boolean', description: 'Toggle compact layout spacing' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Component 315\`

- **Exact Figma Layer Name**: \`Component 315\`
- **Figma Node ID**: \`NodeID:315:DataTableFrame\`
- **Bound Variable Aliases**:
  - \`card-border-radius\`: \`--uedp-rounded-2xl\` (\`VariableID:201:2xl\`)
  - \`cell-padding\`: \`--uedp-padding-4\` (\`VariableID:203:4\`)
  - \`header-bg\`: \`--uedp-slate-50\` (\`VariableID:101:50\`)
  - \`font-family-mono\`: \`--uedp-fontFamily-mono\` (\`VariableID:205:mono\`)
- **Unbound Raw Values**:
  - \`border-width\`: \`1px\`
  - \`th-font-size\`: \`12px\`

#### Component Property Aliasing Table

| Layer Property | CSS Rule | Bound Token Variable | Figma Variable ID |
|---|---|---|---|
| Frame Border Radius | \`border-radius\` | \`--uedp-rounded-2xl\` | \`VariableID:201:2xl\` |
| Table Header Fill | \`background-color\` | \`--uedp-slate-50\` | \`VariableID:101:50\` |
| ID / Value Font | \`font-family\` | \`--uedp-fontFamily-mono\` | \`VariableID:205:mono\` |
| Completed Status Pill | \`background-color\` | \`--uedp-emerald-100\` | \`VariableID:104:100\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component315>;

export const Default: Story = {
  args: {
    title: 'Figma System Sync Log',
    subtitle: 'Showing recent automated discovery & token export events',
    compact: false,
  },
};
