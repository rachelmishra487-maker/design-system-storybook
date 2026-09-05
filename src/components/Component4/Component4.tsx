import React from 'react';
import './Component4.css';

export type Component4Variant = 'white' | 'yellow' | 'gray';
export type Component4Size = 'sm' | 'md' | 'lg';

export interface Component4Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant matching Figma Component 4 (node-id=23-524)
   * - 'white': Pure white background with black text (#000000)
   * - 'yellow': Golden-amber background with white text (#FFFFFF)
   * - 'gray': Slate-gray background with white text (#FFFFFF)
   * @default 'white'
   */
  variant?: Component4Variant;
  /**
   * Button sizing scale
   * @default 'md'
   */
  size?: Component4Size;
  /**
   * Display leading Google multicolor logo
   * @default true
   */
  showIcon?: boolean;
  /**
   * Custom leading icon component
   */
  icon?: React.ReactNode;
  /**
   * Expand button to 100% width of parent container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Button label content
   * @default 'Google'
   */
  children?: React.ReactNode;
}

/**
 * Official Google 4-Color Vector Logo
 */
export const GoogleLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`uedp-component-4__logo ${className}`}
    aria-hidden="true"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

/**
 * Preserved Figma Layer Name: "Component 4"
 * Node ID: node-id=23-524 (Figma Node ID: 23:524)
 *
 * Visual spec:
 * - Rounded pillowy rectangle with prominent soft drop shadow.
 * - Leading authentic multi-colored Google "G" logo.
 * - Bold geometric typography.
 * - Text color rules:
 *   - White variant: Black text (#000000)
 *   - Yellow variant: White text (#FFFFFF)
 *   - Gray variant: White text (#FFFFFF)
 */
export const Component4: React.FC<Component4Props> = ({
  variant = 'white',
  size = 'md',
  showIcon = true,
  icon,
  fullWidth = false,
  disabled = false,
  children = 'Google',
  className = '',
  ...props
}) => {
  const classNames = [
    'uedp-component-4',
    `uedp-component-4--${variant}`,
    `uedp-component-4--${size}`,
    fullWidth ? 'uedp-component-4--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconSizeMap: Record<Component4Size, number> = {
    sm: 24,
    md: 30,
    lg: 36,
  };

  return (
    <button
      className={classNames}
      disabled={disabled}
      type={props.type || 'button'}
      {...props}
    >
      <div className="uedp-component-4__content">
        {showIcon && (icon || <GoogleLogo size={iconSizeMap[size]} />)}
        <span className="uedp-component-4__label">{children}</span>
      </div>
    </button>
  );
};

export interface Component4GroupProps {
  label?: string;
  size?: Component4Size;
  onVariantClick?: (variant: Component4Variant) => void;
  className?: string;
}

/**
 * Helper component rendering the exact 3-button stack as displayed in the Figma canvas.
 */
export const Component4Group: React.FC<Component4GroupProps> = ({
  label = 'Google',
  size = 'md',
  onVariantClick,
  className = '',
}) => {
  const variants: Component4Variant[] = ['white', 'yellow', 'gray'];

  return (
    <div className={`uedp-component-4-group ${className}`}>
      {variants.map((v) => (
        <Component4
          key={v}
          variant={v}
          size={size}
          onClick={() => onVariantClick?.(v)}
        >
          {label}
        </Component4>
      ))}
    </div>
  );
};

export default Component4;
