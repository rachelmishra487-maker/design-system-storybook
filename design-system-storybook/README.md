# 🎨 UEDP-5 Design System & React Storybook Showcase

> High-fidelity, token-synchronized React Storybook component showcase based exclusively on the **UEDP-5 Design Library** Figma file (`nIQ2z7fDwrAq189abiZCER`), design token files (`base-palette-tokens.json`, `foundational-tokens.json`), and strict variable aliasing rules.

---

## 🌟 Key Features

- **Strict Variable Aliasing**: 100% compliant with Figma Variable IDs (`VariableID:*`). Unbound styles strictly preserve raw Figma measurements with 0 fabricated variables.
- **7 Preserved Canvas Layer Components**:
  - `Button` (Figma Node ID: `4:30` - Primary, Secondary, Outline, Ghost, Danger, Link, Scale Sizing `xs` to `lg`, Icons & Loading State)
  - `Component 336` (Card / Figma Node ID: `32:580` - Metric Card, Elevated, Outlined, Filled, Brand Accent, Icon Avatars & Target Progress Bar)
  - `Component 315` (Data Table / Figma Node ID: `315` - System Sync Activity Log)
  - `Date filters` (Figma Node ID: `320` - Preset Chips & Custom Date Range Pickers)
  - `Filters` (Figma Node ID: `310` - Live Search, Category Pills & Grid/List Switcher)
  - `Zones` (Figma Node ID: `340` - Global Availability Zones, Latency & Utilization Progress)
  - `Map` (Figma Node ID: `350` - Global Edge Topology Node Map with Live Ping Overlays)
- **Token Compiler Pipeline**: Automated compiler script converts Figma token definitions to standard CSS Custom Properties in `src/styles/figma-tokens.css`.
- **Google Analytics 4 Tracking**: Injected into `.storybook/preview-head.html` to automatically record story navigation events (`hashchange` and `popstate`).
- **Vercel Deployment Ready**: Pre-configured `vercel.json` for static Single-Page App (SPA) deployment with security and cache headers.

---

## 📁 Repository Structure

```
├── .storybook/
│   ├── main.ts                     # Storybook configuration (Vite builder, autodocs)
│   ├── preview.ts                  # Preview decorator importing figma-tokens.css
│   └── preview-head.html           # GA4 tracker & route event listeners
├── base-palette-tokens.json         # Raw Figma color palette token JSON
├── foundational-tokens.json        # Raw Figma geometry, spacing & elevation token JSON
├── GoUni_Design_System_Figma_Semantic_Tokens.json  # Semantic tokens reference
├── scripts/
│   ├── generate-tokens.js          # Token extraction & CSS generator
│   ├── figma-sync.js               # Figma REST API canvas discovery
│   ├── deploy-vercel.js            # Vercel pre-flight verification script
│   └── serve.js                    # Local development server
├── src/
│   ├── components/
│   │   ├── Button/                 # Figma "Button" Component Set (Node ID 4:30)
│   │   ├── Component315/           # Figma "Component 315" Data Table
│   │   ├── Component336/           # Figma "Component 336" Card (Node ID 32:580)
│   │   ├── DateFilters/            # Figma "Date filters"
│   │   ├── Filters/                # Figma "Filters"
│   │   ├── Map/                    # Figma "Map" Edge Topology
│   │   └── Zones/                  # Figma "Zones" Availability Grid
│   ├── stories/
│   │   └── Tokens/
│   │       ├── ColorPalette.stories.tsx        # Color Token Swatch Gallery
│   │       └── FoundationalTokens.stories.tsx  # Radii & Spacing Gallery
│   ├── styles/
│   │   └── figma-tokens.css        # Auto-generated CSS Custom Properties
│   ├── App.tsx                     # Interactive React Playground Showcase
│   └── index.ts                    # Single barrel export for all components
├── preview-showcase.html           # Standalone offline browser showcase
├── vercel.json                     # Vercel SPA routing & security headers
└── package.json                    # Project scripts & dependencies
```

---

## 🚀 Quick Start

### 1. Generate / Synchronize Tokens
```bash
node scripts/generate-tokens.js
```

### 2. Start Dev Server / Showcase
```bash
node scripts/serve.js
```
Open **[http://localhost:6006](http://localhost:6006)** in your browser.

### 3. Storybook Development
```bash
npm run storybook
```

### 4. Build Static Storybook
```bash
npm run build-storybook
```

---

## 🎨 Token Aliasing Specification

| Category | CSS Variable | Figma Variable ID | Example Value |
|---|---|---|---|
| Primary Action | `--uedp-orange-600` | `VariableID:137:1240` | `#ea580c` |
| Primary Hover | `--uedp-orange-700` | `VariableID:137:1241` | `#c2410c` |
| Inverse Text | `--uedp-base-white` | `VariableID:137:1000` | `#ffffff` |
| Surface Light | `--uedp-neutral-50` | `VariableID:137:1019` | `#fafafa` |
| Surface Secondary | `--uedp-neutral-100` | `VariableID:137:1020` | `#f5f5f5` |
| Border Default | `--uedp-neutral-200` | `VariableID:137:1021` | `#e5e5e5` |
| Border Radius (md) | `--uedp-border-radius-rounded-md` | `VariableID:137:1551` | `6px` |
| Border Radius (2xl) | `--uedp-border-radius-rounded-2xl` | `VariableID:137:1554` | `16px` |
| Gap Scale (md) | `--uedp-gap-2` | `VariableID:137:1558` | `8px` |
| Padding Scale (p-6) | `--uedp-padding-p-6` | `VariableID:137:1569` | `24px` |

---

## 📄 License
MIT © UEDP-5 Design System
