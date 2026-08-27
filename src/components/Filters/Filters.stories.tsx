import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
  tags: ['autodocs'],
  argTypes: {
    searchPlaceholder: { control: 'text', description: 'Placeholder for input field' },
    activeCategory: { control: 'text', description: 'Currently active category pill' },
    showViewToggle: { control: 'boolean', description: 'Toggle grid/list view switcher' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Preserved Figma Layer Spec: \`Filters\`

- **Exact Figma Layer Name**: \`Filters\`
- **Figma Node ID**: \`NodeID:310:FiltersFrame\`
- **Bound Variable Aliases**:
  - \`active-pill-bg\`: \`--uedp-blue-600\` (\`VariableID:102:600\`)
  - \`pill-border-radius\`: \`--uedp-rounded-full\` (\`VariableID:201:full\`)
  - \`frame-background\`: \`--uedp-neutral-0\` (\`VariableID:107:0\`)
  - \`container-gap\`: \`--uedp-gap-4\` (\`VariableID:202:4\`)
- **Unbound Raw Values**:
  - \`search-input-width\`: \`240px\`
  - \`pill-font-size\`: \`12px\`

#### Component Property Aliasing Table

| Layer Element | Property | Bound Variable | Figma Alias ID |
|---|---|---|---|
| Filter Bar Frame | \`background-color\` | \`--uedp-neutral-0\` | \`VariableID:107:0\` |
| Filter Bar Frame | \`border-radius\` | \`--uedp-rounded-xl\` | \`VariableID:201:xl\` |
| Active Pill | \`background-color\` | \`--uedp-blue-600\` | \`VariableID:102:600\` |
| Inactive Pill | \`color\` | \`--uedp-slate-600\` | \`VariableID:101:600\` |
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {
    searchPlaceholder: 'Search components or Figma variables...',
    categories: ['All Items', 'Core UI', 'Navigation', 'Data Display', 'Feedback'],
    activeCategory: 'All Items',
    showViewToggle: true,
  },
};
