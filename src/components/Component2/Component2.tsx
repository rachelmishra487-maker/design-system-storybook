import React from 'react';
import './Component2.css';

export type Component2Variant = 'white' | 'yellow' | 'gray';
export type Component2Size = 'sm' | 'md' | 'lg';

export interface Component2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant matching Figma component (node-id=22-459)
   * - 'white': Pure white background with black text
   * - 'yellow': Golden-amber background with black text
   * - 'gray': Medium gray background with black text
   * @default 'white'
   */
  variant?: Component2Variant;
  /**
   * Button sizing scale
   * @default 'md'
   */
  size?: Component2Size;
  /**
   * Full width block button
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Text label or element content
   * @default 'button'
   */
  children?: React.ReactNode;
}

/**
 * Preserved Figma Layer Name: "Component 2"
 * Node ID: node-id=22-459 (Figma Node ID: 22:459)
 *
 * Visual spec:
 * - Rectangular flat button design with bold centered lowercase text.
 * - Solid black typography across all variants (#000000).
 * - Three primary color variants:
 *   1. White (#FFFFFF)
 *   2. Yellow / Amber (#FFB800)
 *   3. Gray (#949494)
 */
export const Component2: React.FC<Component2Props> = ({
  variant = 'white',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children = 'button',
  className = '',
  ...props
}) => {
  const classNames = [
    'uedp-component-2',
    `uedp-component-2--${variant}`,
    `uedp-component-2--${size}`,
    fullWidth ? 'uedp-component-2--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled}
      type={props.type || 'button'}
      {...props}
    >
      <span className="uedp-component-2__label">{children}</span>
    </button>
  );
};

export interface Component2GroupProps {
  /**
   * Custom label for all buttons in the stack
   * @default 'button'
   */
  label?: string;
  /**
   * Sizing for the buttons in the stack
   * @default 'md'
   */
  size?: Component2Size;
  /**
   * Optional click handler called when any variant is clicked
   */
  onVariantClick?: (variant: Component2Variant) => void;
  /**
   * Optional container class name
   */
  className?: string;
}

/**
 * Helper component rendering the exact 3-button stack as displayed in the Figma canvas.
 */
export const Component2Group: React.FC<Component2GroupProps> = ({
  label = 'button',
  size = 'md',
  onVariantClick,
  className = '',
}) => {
  const variants: Component2Variant[] = ['white', 'yellow', 'gray'];

  return (
    <div className={`uedp-component-2-group ${className}`}>
      {variants.map((v) => (
        <Component2
          key={v}
          variant={v}
          size={size}
          onClick={() => onVariantClick?.(v)}
        >
          {label}
        </Component2>
      ))}
    </div>
  );
};

export default Component2;
