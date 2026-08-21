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

## 🚀 Quick Start

### 1. Generate / Synchronize Tokens
```bash
node design-system-storybook/scripts/generate-tokens.js
```

### 2. Start Dev Server / Showcase
```bash
node design-system-storybook/scripts/serve.js
```
Open **[http://localhost:6006](http://localhost:6006)** in your browser.

---

## 📄 License
MIT © UEDP-5 Design System
