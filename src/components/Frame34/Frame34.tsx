import React, { useState, forwardRef } from 'react';
import './Frame34.css';

export type Frame34Variant = 'default' | 'gray' | 'elevated';
export type Frame34Size = 'sm' | 'md' | 'lg';

export interface Frame34Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Search card visual variant matching Figma Frame 34 (node-id=31-521):
   * - 'default': Pure white flat card (#FFFFFF)
   * - 'gray': Slate-gray card (#8E8E93)
   * - 'elevated': Pure white card (#FFFFFF) with soft elevated drop shadow
   * @default 'default'
   */
  variant?: Frame34Variant;
  /**
   * Placeholder / display text
   * @default 'Search for your dream course'
   */
  placeholder?: string;
  /**
   * Search input value
   */
  value?: string;
  /**
   * Default search value
   */
  defaultValue?: string;
  /**
   * Sizing scale variant
   * @default 'md'
   */
  size?: Frame34Size;
  /**
   * Custom leading icon
   */
  icon?: React.ReactNode;
  /**
   * Optional trailing action or clear icon
   */
  trailingAction?: React.ReactNode;
  /**
   * Change callback
   */
  onChange?: (value: string) => void;
  /**
   * Submit / Search callback on Enter key
   */
  onSearch?: (value: string) => void;
  /**
   * Full width container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

/**
 * Authentic Search Magnifying Glass Icon matching Figma Frame 34 spec (Node 31:521)
 */
export const SearchIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="11.5"
      cy="11.5"
      r="8"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M17.5 17.5L25 25"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Preserved Figma Layer Spec: "Frame 34"
 * Node ID: node-id=31-521 (Figma Node ID: 31:521)
 *
 * Visual spec:
 * - Rounded search pill card (border-radius: ~24px, width: ~560px, height: ~76px).
 * - Left search magnifying glass icon (stroke: ~3.2px).
 * - Typography / Placeholder ("Search for your dream course", font-size: ~24px, weight: 500-600).
 * - Three distinct variant states:
 *   1. Default: Flat pure white surface (#FFFFFF) with solid black icon & text.
 *   2. Gray: Medium slate-gray surface (#8E8E93) with muted charcoal icon & text.
 *   3. Elevated: Pure white surface (#FFFFFF) with prominent soft elevated drop shadow.
 */
export const Frame34 = forwardRef<HTMLInputElement, Frame34Props>(
  (
    {
      variant = 'default',
      placeholder = 'Search for your dream course',
      value: controlledValue,
      defaultValue = '',
      size = 'md',
      icon,
      trailingAction,
      onChange,
      onSearch,
      fullWidth = false,
      disabled = false,
      className = '',
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isFocused, setIsFocused] = useState(false);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const effectiveVariant = variant === 'gray' || disabled ? 'gray' : variant;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e);
      if (e.key === 'Enter') {
        onSearch?.(currentValue);
      }
    };

    const classNames = [
      'uedp-frame-34',
      `uedp-frame-34--${effectiveVariant}`,
      `uedp-frame-34--size-${size}`,
      isFocused && effectiveVariant !== 'gray' ? 'uedp-frame-34--focused' : '',
      fullWidth ? 'uedp-frame-34--full-width' : '',
      disabled ? 'uedp-frame-34--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconSize = size === 'sm' ? 22 : size === 'lg' ? 34 : 28;

    return (
      <div className={classNames}>
        {/* Leading Search Icon */}
        <div className="uedp-frame-34__icon-wrap">
          {icon !== undefined ? icon : <SearchIcon size={iconSize} />}
        </div>

        {/* Search Input Field */}
        <input
          ref={ref}
          type="text"
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled || effectiveVariant === 'gray'}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="uedp-frame-34__input"
          {...props}
        />

        {/* Optional Trailing Action */}
        {trailingAction && <div className="uedp-frame-34__trailing">{trailingAction}</div>}
      </div>
    );
  }
);

Frame34.displayName = 'Frame34';

export interface Frame34GroupProps {
  placeholder?: string;
  size?: Frame34Size;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 3-variant Component Set:
 * Flat White, Slate Gray, and Elevated White enclosed within the purple dashed container with "❖ Frame 34" header.
 */
export const Frame34Group: React.FC<Frame34GroupProps> = ({
  placeholder = 'Search for your dream course',
  size = 'md',
  className = '',
}) => {
  const variants: Frame34Variant[] = ['default', 'gray', 'elevated'];

  return (
    <div className={`uedp-frame-34-canvas-container ${className}`}>
      {/* Figma Component Set Top Badge */}
      <div className="uedp-frame-34-canvas-badge">
        <span className="uedp-frame-34-canvas-badge__icon">&#10070;</span>
        <span className="uedp-frame-34-canvas-badge__text">Frame 34</span>
      </div>

      {/* Purple dashed component set boundary */}
      <div className="uedp-frame-34-component-set">
        {variants.map((v) => (
          <Frame34
            key={v}
            variant={v}
            placeholder={placeholder}
            size={size}
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const SearchInput = Frame34;
export const CourseSearchBar = Frame34;
export const SearchBarPill = Frame34;
export const Frame34ComponentSet = Frame34Group;
export default Frame34;
