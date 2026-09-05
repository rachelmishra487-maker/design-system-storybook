import React, { useState } from 'react';
import './App.css';
import {
  Button,
  Component2,
  Component2Frame18,
  Component3,
  Component4,
  Component5,
  Component336,
  Component315,
  DateFilters,
  Filters,
  Zones,
  Map,
  Frame2,
  Frame2Group,
} from './index';

type Tab = 'overview' | 'colors' | 'foundations' | 'components';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'>('primary');
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [btnLoading, setBtnLoading] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="app-header__top">
          <div className="app-brand">
            <div className="app-logo">🎨</div>
            <div className="app-title-group">
              <h1>
                UEDP-5 Design System & Storybook
                <span className="app-version-badge">Figma Synced</span>
              </h1>
              <p className="app-subtitle">
                Figma File: <a href="https://www.figma.com/design/nIQ2z7fDwrAq189abiZCER/UEDP-5--design-library?node-id=0-1" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>UEDP-5 Design Library (nIQ2z7fDwrAq189abiZCER)</a>
              </p>
            </div>
          </div>

          <div className="app-stats">
            <div className="stat-pill stat-pill--tokens">
              <span className="stat-dot" />
              <span>32 Color & Geometry Tokens</span>
            </div>
            <div className="stat-pill stat-pill--components">
              <span className="stat-dot" />
              <span>8 Figma Components Preserved</span>
            </div>
            <div className="stat-pill stat-pill--figma">
              <span className="stat-dot" />
              <span>GA4 Tracked</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="app-nav">
        <div className="app-nav__container">
          <button
            className={`nav-tab ${activeTab === 'overview' ? 'nav-tab--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 System Overview
          </button>
          <button
            className={`nav-tab ${activeTab === 'colors' ? 'nav-tab--active' : ''}`}
            onClick={() => setActiveTab('colors')}
          >
            🎨 Color Tokens
          </button>
          <button
            className={`nav-tab ${activeTab === 'foundations' ? 'nav-tab--active' : ''}`}
            onClick={() => setActiveTab('foundations')}
          >
            📐 Foundational Tokens
          </button>
          <button
            className={`nav-tab ${activeTab === 'components' ? 'nav-tab--active' : ''}`}
            onClick={() => setActiveTab('components')}
          >
            🧩 Preserved Components (7)
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        {activeTab === 'overview' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">Design System Architecture & Figma Sync</h2>
              <p className="section-desc">
                High-fidelity React component library synchronized with Figma Variable IDs, strict token aliasing, and Storybook specification tables.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>🎨 Token Automation Pipeline</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  Reads <code>base-palette-tokens.json</code> and <code>foundational-tokens.json</code>, compiling them directly to <code>src/styles/figma-tokens.css</code> with 1:1 Variable ID comments.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>🔒 Strict Variable Aliasing</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  Every bound Figma property uses only exact token variables (e.g. <code>--uedp-blue-600</code>). Unbound properties use exact raw Figma dimensions without invented variables.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>🏷️ Exact Layer Names Preserved</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  Layer names from Figma canvas are strictly preserved: <code>Component 336</code>, <code>Filters</code>, <code>Component 315</code>, <code>Date filters</code>, <code>Zones</code>, <code>Map</code>, and <code>Button</code>.
                </p>
              </div>
            </div>

            <div className="component-card">
              <div className="component-card__header">
                <span className="component-card__layer-name">Live Component Preview: Component 336 (Revenue Metric)</span>
                <span className="component-card__layer-badge">NodeID:336:ComponentCard</span>
              </div>
              <div className="component-card__body">
                <div style={{ width: '100%', maxWidth: '380px' }}>
                  <Component336
                    title="System Revenue"
                    value="$124,850.00"
                    trendValue="+14.2%"
                    trendStatus="up"
                    statusLabel="Active Goal"
                    badgeVariant="success"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'colors' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">Base Color Palette Tokens</h2>
              <p className="section-desc">
                Derived directly from <code>base-palette-tokens.json</code>. Click any swatch to copy its CSS custom property.
              </p>
              {copiedToken && (
                <div style={{ marginTop: '12px', padding: '8px 16px', background: '#d1fae5', color: '#059669', borderRadius: '6px', fontWeight: 600, display: 'inline-block' }}>
                  ✓ Copied to clipboard: <code>{copiedToken}</code>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { name: 'Slate Palette (Neutrals & Dark Surfaces)', prefix: 'slate', shades: ['50','100','200','300','400','500','600','700','800','900','950'] },
                { name: 'Blue Palette (Primary Action)', prefix: 'blue', shades: ['50','100','200','300','400','500','600','700','800','900'] },
                { name: 'Indigo Palette (Accent / Brand)', prefix: 'indigo', shades: ['500','600','700'] },
                { name: 'Emerald Palette (Success)', prefix: 'emerald', shades: ['100','500','600'] },
                { name: 'Amber Palette (Warning)', prefix: 'amber', shades: ['100','500','600'] },
                { name: 'Rose Palette (Danger)', prefix: 'rose', shades: ['100','500','600'] },
              ].map((fam) => (
                <div key={fam.prefix}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#334155', marginBottom: '12px' }}>{fam.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {fam.shades.map((shade) => {
                      const varName = `--uedp-${fam.prefix}-${shade}`;
                      return (
                        <div
                          key={varName}
                          onClick={() => copyToClipboard(varName)}
                          style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            background: '#fff',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                          }}
                        >
                          <div style={{ height: '70px', backgroundColor: `var(${varName})` }} />
                          <div style={{ padding: '10px 12px' }}>
                            <code style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>{varName}</code>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'foundations' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">Foundational Tokens</h2>
              <p className="section-desc">
                Extracted from <code>foundational-tokens.json</code> covering border radii, spacing gaps, and elevation shadows.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>Border Radius Scale</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].map((r) => (
                    <div key={r} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px' }}>
                      <code>--uedp-rounded-{r}</code>
                      <div style={{ width: '40px', height: '28px', background: 'var(--uedp-blue-500)', borderRadius: `var(--uedp-rounded-${r})` }} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>Spacing & Gap Scale</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['1', '2', '3', '4', '6', '8', '12'].map((g) => (
                    <div key={g} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px' }}>
                      <code>--uedp-gap-{g}</code>
                      <div style={{ width: `var(--uedp-gap-${g})`, height: '18px', background: 'var(--uedp-indigo-600)', borderRadius: '4px' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="component-showcase-grid">
            {/* 1. Button (Figma Node ID 4:30) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Button</span>
                  <span className="component-card__layer-badge">Figma Node ID: 2:75 & 4:30</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {(['next', 'back', 'primary', 'secondary', 'outline', 'ghost', 'danger', 'link'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setBtnVariant(v)}
                      style={{
                        padding: '4px 10px',
                        fontSize: '12px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        background: btnVariant === v ? '#ea580c' : '#fff',
                        color: btnVariant === v ? '#fff' : '#334155',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {v}
                    </button>
                  ))}
                  <button
                    onClick={() => setBtnLoading(!btnLoading)}
                    style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', background: btnLoading ? '#3b82f6' : '#fff', color: btnLoading ? '#fff' : '#334155', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Spinner: {btnLoading ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
              <div className="component-card__body" style={{ flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant={btnVariant} size="xs" loading={btnLoading}>
                    Extra Small (xs)
                  </Button>
                  <Button variant={btnVariant} size="sm" loading={btnLoading}>
                    Small (sm)
                  </Button>
                  <Button variant={btnVariant} size="md" loading={btnLoading}>
                    Medium (md)
                  </Button>
                  <Button variant={btnVariant} size="lg" loading={btnLoading}>
                    Large (lg)
                  </Button>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant={btnVariant} size="md" iconLeft={<span>★</span>}>
                    Leading Icon
                  </Button>
                  <Button variant={btnVariant} size="md" iconRight={<span>→</span>}>
                    Trailing Icon
                  </Button>
                  <Button variant={btnVariant} size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID (Node ID: 4:30)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Primary Background</td><td><code>--uedp-orange-600</code></td><td>VariableID:137:1240</td></tr>
                    <tr><td>Primary Hover</td><td><code>--uedp-orange-700</code></td><td>VariableID:137:1241</td></tr>
                    <tr><td>Primary Pressed / Active</td><td><code>--uedp-orange-800</code></td><td>VariableID:137:1242</td></tr>
                    <tr><td>Secondary Surface</td><td><code>--uedp-neutral-100</code></td><td>VariableID:137:1020</td></tr>
                    <tr><td>Border Default</td><td><code>--uedp-neutral-200</code></td><td>VariableID:137:1021</td></tr>
                    <tr><td>Border Radius (md)</td><td><code>--uedp-border-radius-rounded-md</code> (6px)</td><td>VariableID:137:1551</td></tr>
                    <tr><td>Gap (md)</td><td><code>--uedp-gap-2</code> (8px)</td><td>VariableID:137:1558</td></tr>
                    <tr><td>Disabled Opacity</td><td><code>--uedp-opacity-50</code> (0.5)</td><td>VariableID:137:1575</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Component 336 / Card (Figma Node ID 32:580) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 336 (Card)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 32:580</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
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
                  subtitle="Compared to last month ($109,280)"
                />
                <Component336
                  variant="brand"
                  title="Active Users"
                  value="48,290"
                  trendValue="+8.4%"
                  trendStatus="up"
                  statusLabel="Live Traffic"
                  badgeVariant="brand"
                  icon={<span>👥</span>}
                  iconVariant="orange"
                  progress={92}
                  subtitle="12,400 concurrent sessions today"
                />
                <Component336
                  variant="outlined"
                  title="Cluster Storage"
                  value="92.4 %"
                  trendValue="+5.8%"
                  trendStatus="down"
                  statusLabel="Near Limit"
                  badgeVariant="danger"
                  icon={<span>⚡</span>}
                  iconVariant="purple"
                  progress={92}
                  subtitle="Threshold reached on cluster us-east-1"
                />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID (Node ID: 32:580)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Corner Radius</td><td><code>--uedp-border-radius-rounded-2xl</code> (16px)</td><td>VariableID:137:1554</td></tr>
                    <tr><td>Container Padding</td><td><code>--uedp-padding-p-6</code> (24px)</td><td>VariableID:137:1569</td></tr>
                    <tr><td>Card Surface</td><td><code>--uedp-base-white</code> (#ffffff)</td><td>VariableID:137:1000</td></tr>
                    <tr><td>Border Default</td><td><code>--uedp-neutral-200</code> (#e5e5e5)</td><td>VariableID:137:1021</td></tr>
                    <tr><td>Metric Value Color</td><td><code>--uedp-neutral-950</code> (#0a0a0a)</td><td>VariableID:137:1029</td></tr>
                    <tr><td>Brand Accent Top</td><td><code>--uedp-orange-600</code></td><td>VariableID:137:1240</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            
            
            
            
            {/* Frame 2 - Selection Pill Cards (Figma Node ID: 2:10) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Frame 2 (Selection Pill Cards)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 2:10</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">node-id=2-10</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '36px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#C8CBD0', borderRadius: '12px' }}>
                <Frame2Group />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>State Variant</th><th>Indicator Fill &amp; Border</th><th>Card Background &amp; Typography (Node ID: 2:10)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>State 1: Filled</td><td><code>#FFB800</code> Solid Fill (Golden Amber)</td><td>White Pill Card (<code>#FFFFFF</code>), Navy Title (<code>#0F172A</code>, 700)</td></tr>
                    <tr><td>State 2: Outline</td><td><code>#FFFFFF</code> Fill + <code>2.5px solid #FFB800</code></td><td>White Pill Card (<code>#FFFFFF</code>), Navy Title (<code>#0F172A</code>, 700)</td></tr>
                    <tr><td>State 3: Gray</td><td><code>#8E8E93</code> Fill + <code>2.5px solid #FFB800</code></td><td>White Pill Card (<code>#FFFFFF</code>), Navy Title (<code>#0F172A</code>, 700)</td></tr>
                    <tr><td>Geometry</td><td>Squircle: <code>60 &times; 60px</code> (radius: <code>18px</code>)</td><td>Card: <code>480 &times; 104px</code> (radius: <code>44px</code>, gap: <code>28px</code>)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Component 2/Frame 18 - Location Action Buttons (Figma Node ID: 4:30) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 2/Frame 18 (Direction &amp; Call)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 4:30</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">266 &times; 46 Hug</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '36px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', borderRadius: '12px' }}>
                <Component2Frame18 />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Action</th><th>Background Color</th><th>Text Color &amp; Specs (Node ID: 4:30)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Direction (Left)</td><td><code>#C2410C</code> (Terracotta)</td><td>White bold text (<code>#FFFFFF</code>), height: 46px</td></tr>
                    <tr><td>Call (Right)</td><td><code>#FFFFFF</code> (White)</td><td>Dark charcoal text (<code>#0F172A</code>), height: 46px</td></tr>
                    <tr><td>Dimensions</td><td><code>266 &times; 46px</code></td><td>Gap: <code>12px</code>, Sharp corners (<code>0px</code>)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Component 2 - Tri-State Buttons (Figma Node ID: 22:459) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 2 (Button Set)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 22:459</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">node-id=22-459</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '32px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#E2E8F0', borderRadius: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
                  <Component2 variant="white">button</Component2>
                  <Component2 variant="yellow">button</Component2>
                  <Component2 variant="gray">button</Component2>
                </div>
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Variant</th><th>Background Color</th><th>Text Color / Specs (Node ID: 22:459)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>White</td><td><code>#FFFFFF</code></td><td>Solid black bold text ("button"), radius: 0px</td></tr>
                    <tr><td>Yellow</td><td><code>#FFB800</code> (Amber)</td><td>Solid black bold text ("button"), radius: 0px</td></tr>
                    <tr><td>Gray</td><td><code>#949494</code> (Slate Gray)</td><td>Solid black bold text ("button"), radius: 0px</td></tr>
                    <tr><td>Dimensions</td><td>280px &times; 64px</td><td>Centered bold geometric typography</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            
            {/* Component 4 - Elevated Google Button Set (Figma Node ID: 23:524) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 4 (Elevated Google Buttons)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 23:524</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">node-id=23-524</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '36px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', borderRadius: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
                  <Component4 variant="white">Google</Component4>
                  <Component4 variant="yellow">Google</Component4>
                  <Component4 variant="gray">Google</Component4>
                </div>
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Variant</th><th>Background Fill</th><th>Text Color / Specs (Node ID: 23:524)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>White</td><td><code>#FFFFFF</code></td><td>Black text (<code>#000000</code>), 4-color Google G logo, 18px radius</td></tr>
                    <tr><td>Yellow</td><td><code>#FFB800</code> (Amber)</td><td>White text (<code>#FFFFFF</code>), 4-color Google G logo, 18px radius</td></tr>
                    <tr><td>Gray</td><td><code>#8C8C8C</code> (Slate Gray)</td><td>White text (<code>#FFFFFF</code>), 4-color Google G logo, 18px radius</td></tr>
                    <tr><td>Elevation</td><td>Pillowy Drop Shadow</td><td><code>0 12px 28px -4px rgba(0,0,0,0.24)</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            
            {/* Component 5 - Visa Help Squircle Cards (Figma Node ID: 24:551) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 5 (Visa Help Cards)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 24:551</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">2 Variants</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '40px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', borderRadius: '12px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
                  <Component5 variant="yellow" title="Visa Help" subtitle="Instant guidance" />
                  <Component5 variant="gray" title="Visa Help" subtitle="Instant guidance" />
                </div>
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Variant</th><th>Background Color</th><th>Logo &amp; Typography (Node ID: 24:551)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Yellow</td><td><code>#FFB800</code> (Golden Amber)</td><td>Navy Visa Logo (<code>#1A1F71</code>), White Title (800), White Subtitle (500)</td></tr>
                    <tr><td>Gray</td><td><code>#8E8E93</code> (Slate Gray)</td><td>Navy Visa Logo (<code>#1A1F71</code>), White Title (800), White Subtitle (500)</td></tr>
                    <tr><td>Shape</td><td>Squircle Card</td><td>Corner radius: <code>52px</code>, Padding: <code>32px</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Component 3 - Stepper (Figma Node ID: 0:1) */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 3 (Progress Stepper)</span>
                  <span className="component-card__layer-badge">Figma Node ID: 0:1</span>
                </div>
                <div className="component-card__actions">
                  <span className="figma-status-tag figma-status-tag--bound">node-id=0-1</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'center' }}>
                <Component3 currentStep={2} totalSteps={4} />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Element</th><th>CSS Value / Token</th><th>Figma Spec (Node ID: 0:1)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Track Line</td><td><code>#000000</code> (height: 2px)</td><td>Continuous horizontal baseline with overhangs</td></tr>
                    <tr><td>Step 1 (Completed)</td><td><code>#FFB800</code> (Amber)</td><td>Solid circle with white bold "1"</td></tr>
                    <tr><td>Step 2 (Active)</td><td><code>#FF5722</code> (Coral Orange)</td><td>Solid circle with white bold "2" + translucent halo ring</td></tr>
                    <tr><td>Steps 3 & 4 (Upcoming)</td><td><code>#EEF2F6</code> (Soft Slate)</td><td>Solid circle with dark slate bold numbers</td></tr>
                    <tr><td>Circle Dimensions</td><td>56px &times; 56px (radius: 50%)</td><td>Centered vertically over track line</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Filters */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Filters</span>
                  <span className="component-card__layer-badge">NodeID:310:FiltersFrame</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%' }}>
                <Filters searchPlaceholder="Search components or Figma variables..." />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Frame Background</td><td><code>--uedp-neutral-0</code></td><td>VariableID:107:0</td></tr>
                    <tr><td>Active Pill BG</td><td><code>--uedp-blue-600</code></td><td>VariableID:102:600</td></tr>
                    <tr><td>Pill Radius</td><td><code>--uedp-rounded-full</code></td><td>VariableID:201:full</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Date filters */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Date filters</span>
                  <span className="component-card__layer-badge">NodeID:320:DateFiltersFrame</span>
                </div>
              </div>
              <div className="component-card__body">
                <DateFilters />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Active Chip Color</td><td><code>--uedp-blue-600</code></td><td>VariableID:102:600</td></tr>
                    <tr><td>Input Font</td><td><code>--uedp-fontFamily-mono</code></td><td>VariableID:205:mono</td></tr>
                    <tr><td>Frame Border Radius</td><td><code>--uedp-rounded-xl</code></td><td>VariableID:201:xl</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Component 315 */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Component 315</span>
                  <span className="component-card__layer-badge">NodeID:315:DataTableFrame</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%' }}>
                <Component315 />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Table Frame Radius</td><td><code>--uedp-rounded-2xl</code></td><td>VariableID:201:2xl</td></tr>
                    <tr><td>Header Background</td><td><code>--uedp-slate-50</code></td><td>VariableID:101:50</td></tr>
                    <tr><td>ID Font</td><td><code>--uedp-fontFamily-mono</code></td><td>VariableID:205:mono</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Zones */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Zones</span>
                  <span className="component-card__layer-badge">NodeID:340:ZonesGridFrame</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '0' }}>
                <Zones />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Frame Background</td><td><code>--uedp-slate-900</code></td><td>VariableID:101:900</td></tr>
                    <tr><td>Card Background</td><td><code>--uedp-slate-800</code></td><td>VariableID:101:800</td></tr>
                    <tr><td>Active Border Highlight</td><td><code>--uedp-blue-500</code></td><td>VariableID:102:500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7. Map */}
            <div className="component-card">
              <div className="component-card__header">
                <div className="component-card__title-wrap">
                  <span className="component-card__layer-name">Map</span>
                  <span className="component-card__layer-badge">NodeID:350:GeoMapFrame</span>
                </div>
              </div>
              <div className="component-card__body" style={{ width: '100%', padding: '0' }}>
                <Map />
              </div>
              <div className="component-card__spec-table">
                <table className="spec-table-grid">
                  <thead>
                    <tr><th>Property</th><th>CSS Variable / Raw Value</th><th>Figma Variable ID</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Viewport Background</td><td><code>--uedp-slate-950</code></td><td>VariableID:101:950</td></tr>
                    <tr><td>Online Pin Color</td><td><code>--uedp-emerald-500</code></td><td>VariableID:104:500</td></tr>
                    <tr><td>Warning Pin Color</td><td><code>--uedp-amber-500</code></td><td>VariableID:105:500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>UEDP-5 Design System & Storybook • Fully Tokenized • Preserved Figma Layer Spec</p>
      </footer>
    </div>
  );
};

export default App;
