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
 * Official Visa Vector Wordmark Logo
 */
export const VisaLogo: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 72,
  color = '#1A1F71',
  className = '',
}) => {
  const height = Math.round(size * 0.32);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 142 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`uedp-component-5__logo ${className}`}
      aria-label="Visa"
    >
      <path
        d="M57.6 44.5L68.8 1.1h17.9L75.6 44.5H57.6zm54.3-42.5c-3.6-1.4-9.2-2.9-16.1-2.9-17.7 0-30.2 9.4-30.3 22.9-.2 10 8.9 15.6 15.7 18.9 7 3.4 9.3 5.6 9.3 8.6-.1 4.6-5.6 6.8-10.7 6.8-7.2 0-11-1.1-16.9-3.7l-2.4-1.1-2.6 16.1c4.3 2 12.3 3.7 20.6 3.8 19.4 0 32.1-9.6 32.2-24.4.1-8.1-4.9-14.3-15.5-19.4-6.5-3.3-10.4-5.5-10.4-8.8 0-3 3.3-6.1 10.6-6.1 6.1-.1 10.5 1.3 13.9 2.8l1.7.8 2.6-16.1zm33.4 1.1h-13.8c-4.3 0-7.5 1.2-9.4 5.7L96.3 44.5h18.9s3.1-8.6 3.8-10.5c2.1 0 20.3 0 23.3 0 .5 2.5 2.1 10.5 2.1 10.5h16.7L145.3 3.1zm-19.6 24.2c1.5-4 7.2-19.5 7.2-19.5.1 0 3.7 10.1 5.9 19.5h-13.1zM42.8 1.1L25.3 30.6l-1.9-9.5c-3.2-10.8-13.2-22.6-24.4-28.5l15.8 41.9h19L62.7 1.1H42.8z"
        fill={color}
      />
    </svg>
  );
};

/**
 * Preserved Figma Layer Name: "Component 5"
 * Node ID: node-id=24-551 (Figma Node ID: 24:551)
 * Set Metadata: "2 Variants" (Yellow & Gray)
 *
 * Visual spec:
 * - Generous rounded squircle card container (border-radius: ~52px).
 * - Authentic Visa logo at top-left.
 * - Bold white title ("Visa Help") + white subtitle ("Instant guidance") at bottom.
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
    sm: 56,
    md: 72,
    lg: 88,
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
        {logo || <VisaLogo size={logoSizeMap[size]} color="#1A1F71" />}
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
