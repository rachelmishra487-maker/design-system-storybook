import React from 'react';
import './Component5.css';

export type Component5Variant = 'yellow' | 'gray';
export type Component5Size = 'sm' | 'md' | 'lg';

export interface Component5Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual color variant matching Figma 2-variant set (node-id=24-551)
   * - 'yellow': Golden-amber background (#FFB800)
   * - 'gray': Medium slate-gray background (#8E8E93)
   * @default 'yellow'
   */
  variant?: Component5Variant;
  /**
   * Card sizing scale
   * @default 'md'
   */
  size?: Component5Size;
  /**
   * Main title text
   * @default 'Visa Help'
   */
  title?: string;
  /**
   * Secondary guidance subtitle
   * @default 'Instant guidance'
   */
  subtitle?: string;
  /**
   * Optional custom logo component (defaults to official Visa logo)
   */
  logo?: React.ReactNode;
  /**
   * Click handler when the card is pressed
   */
  onClick?: () => void;
  /**
   * Custom children for card body
   */
  children?: React.ReactNode;
}

/**
 * Official Visa Vector Wordmark Logo with Authentic Letterforms
 */
export const VisaLogo: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 76,
  color = '#1434CB',
  className = '',
}) => {
  const height = Math.round(size / 3.09);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 1000.046 323.653"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`uedp-component-5__logo ${className}`}
      aria-label="Visa Logo"
    >
      <g transform="matrix(4.4299631,0,0,4.4299631,-81.165783,-105.04783)">
        {/* Letter 'I' */}
        <polygon
          points="116.145,95.719 97.858,95.719 109.296,24.995 127.582,24.995"
          fill={color}
        />
        {/* Letter 'S' */}
        <path
          d="m 182.437,26.724 c -3.607,-1.431 -9.328,-3.011 -16.402,-3.011 -18.059,0 -30.776,9.63 -30.854,23.398 -0.15,10.158 9.105,15.8 16.027,19.187 7.075,3.461 9.48,5.72 9.48,8.805 -0.072,4.738 -5.717,6.922 -10.982,6.922 -7.301,0 -11.213,-1.126 -17.158,-3.762 l -2.408,-1.13 -2.559,15.876 c 4.289,1.954 12.191,3.688 20.395,3.764 19.188,0 31.68,-9.481 31.828,-24.153 0.073,-8.051 -4.814,-14.22 -15.35,-19.261 -6.396,-3.236 -10.313,-5.418 -10.313,-8.729 0.075,-3.01 3.313,-6.093 10.533,-6.093 5.945,-0.151 10.313,1.278 13.622,2.708 l 1.654,0.751 2.487,-15.272 0,0 z"
          fill={color}
        />
        {/* Letter 'A' */}
        <path
          d="m 206.742,70.664 c 1.506,-4.063 7.301,-19.788 7.301,-19.788 -0.076,0.151 1.503,-4.138 2.406,-6.771 l 1.278,6.094 c 0,0 3.463,16.929 4.215,20.465 -2.858,0 -11.588,0 -15.2,0 l 0,0 z m 22.573,-45.669 -14.145,0 c -4.362,0 -7.676,1.278 -9.558,5.868 l -27.163,64.855 19.188,0 c 0,0 3.159,-8.729 3.838,-10.609 2.105,0 20.771,0 23.479,0 0.525,2.483 2.182,10.609 2.182,10.609 l 16.932,0 -14.753,-70.723 0,0 z"
          fill={color}
        />
        {/* Letter 'V' main stem */}
        <path
          d="M 82.584,24.995 64.675,73.222 62.718,63.441 C 59.407,52.155 49.023,39.893 37.435,33.796 l 16.404,61.848 19.338,0 28.744,-70.649 -19.337,0 0,0 z"
          fill={color}
        />
        {/* Letter 'V' wing/serif */}
        <path
          d="m 48.045,24.995 -29.422,0 -0.301,1.429 c 22.951,5.869 38.151,20.016 44.396,37.02 L 56.322,30.94 c -1.053,-4.517 -4.289,-5.796 -8.277,-5.945 l 0,0 z"
          fill={color}
        />
      </g>
    </svg>
  );
};

/**
 * Preserved Figma Layer Name: "Component 5"
 * Node ID: node-id=24-551 (Figma Node ID: 24:551)
 * Set Metadata: "2 Variants" (Yellow & Gray)
 *
 * Visual spec:
 * - Rounded squircle card container (border-radius: ~36px).
 * - Official, undistorted Visa vector logo at top-left in deep blue (#1434CB).
 * - Clean white title ("Visa Help") + white subtitle ("Instant guidance") at bottom.
 * - 2 Distinct color variants:
 *   1. Yellow (#FFB800)
 *   2. Gray (#8E8E93)
 */
export const Component5: React.FC<Component5Props> = ({
  variant = 'yellow',
  size = 'md',
  title = 'Visa Help',
  subtitle = 'Instant guidance',
  logo,
  onClick,
  children,
  className = '',
  ...props
}) => {
  const isInteractive = typeof onClick === 'function';

  const classNames = [
    'uedp-component-5',
    `uedp-component-5--${variant}`,
    `uedp-component-5--${size}`,
    isInteractive ? 'uedp-component-5--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const logoSizeMap: Record<Component5Size, number> = {
    sm: 60,
    md: 76,
    lg: 94,
  };

  return (
    <div
      className={classNames}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    >
      {/* Header / Logo Section */}
      <div className="uedp-component-5__header">
        {logo || <VisaLogo size={logoSizeMap[size]} color="#1434CB" />}
      </div>

      {/* Optional custom children */}
      {children && <div className="uedp-component-5__body">{children}</div>}

      {/* Footer Text Stack */}
      <div className="uedp-component-5__footer">
        {title && <h3 className="uedp-component-5__title">{title}</h3>}
        {subtitle && <p className="uedp-component-5__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export interface Component5GroupProps {
  size?: Component5Size;
  title?: string;
  subtitle?: string;
  onVariantClick?: (variant: Component5Variant) => void;
  className?: string;
}

/**
 * Helper component rendering the exact 2-variant stack as displayed in the Figma canvas.
 */
export const Component5Group: React.FC<Component5GroupProps> = ({
  size = 'md',
  title = 'Visa Help',
  subtitle = 'Instant guidance',
  onVariantClick,
  className = '',
}) => {
  const variants: Component5Variant[] = ['yellow', 'gray'];

  return (
    <div className={`uedp-component-5-group ${className}`}>
      {variants.map((v) => (
        <Component5
          key={v}
          variant={v}
          size={size}
          title={title}
          subtitle={subtitle}
          onClick={() => onVariantClick?.(v)}
        />
      ))}
    </div>
  );
};

// Developer alias
export const VisaHelpCard = Component5;
export default Component5;
