import type { Meta, StoryObj } from '@storybook/react';
import { DateFilters } from './DateFilters';

const meta: Meta<typeof DateFilters> = {
  title: 'Components/Date filters',
  component: DateFilters,
  tags: ['autodocs'],
  argTypes: {
    activePreset: {
      control: { type: 'select' },
      options: ['Today', '7D', '30D', '90D', 'YTD', 'Custom'],
      description: 'Active preset range button',
    },
    startDate: { control: 'text', description: 'Start date string (YYYY-MM-DD)' },
    endDate: { control: 'text', description: 'End date string (YYYY-MM-DD)' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Date filters\`

- **Exact Figma Layer Name**: \`Date filters\`
- **Figma Node ID**: \`NodeID:320:DateFiltersFrame\`
- **Bound Variable Aliases**:
  - \`preset-active-bg\`: \`--uedp-neutral-0\` (\`VariableID:107:0\`)
  - \`preset-active-color\`: \`--uedp-blue-600\` (\`VariableID:102:600\`)
  - \`date-font-mono\`: \`--uedp-fontFamily-mono\` (\`VariableID:205:mono\`)
- **Unbound Raw Values**:
  - \`input-font-size\`: \`12px\`
  - \`preset-container-padding\`: \`3px\`

#### Component Property Aliasing Table

| Element | Property | Bound Variable | Figma Alias ID |
|---|---|---|---|
| Container Frame | \`background-color\` | \`--uedp-neutral-0\` | \`VariableID:107:0\` |
| Preset Chip Active | \`color\` | \`--uedp-blue-600\` | \`VariableID:102:600\` |
| Date Input Font | \`font-family\` | \`--uedp-fontFamily-mono\` | \`VariableID:205:mono\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateFilters>;

export const Default: Story = {
  args: {
    activePreset: '30D',
    startDate: '2026-07-13',
    endDate: '2026-08-12',
  },
};
