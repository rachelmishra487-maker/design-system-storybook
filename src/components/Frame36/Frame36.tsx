import React, { useState, useRef, useEffect } from 'react';
import './Frame36.css';

export type Frame36Variant = 'default' | 'gray' | 'elevated';
export type Frame36Size = 'sm' | 'md' | 'lg';

export interface Frame36Option {
  value: string;
  label: string;
}

export interface Frame36Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant matching Figma Frame 36 (node-id=31-558):
   * - 'default': Pure white flat card with bold midnight text and chevron
   * - 'gray': Slate-gray fill (#8E8E93) with muted text and chevron
   * - 'elevated': White card with soft prominent drop shadow (active/open state)
   * @default 'default'
   */
  variant?: Frame36Variant;
  /**
   * Text label displayed in the field
   * @default 'All Fields'
   */
  label?: string;
  /**
   * Field sizing scale
   * @default 'md'
   */
  size?: Frame36Size;
  /**
   * Whether the dropdown menu is open (controlled mode)
   */
  isOpen?: boolean;
  /**
   * Dropdown options for interactive selection
   */
  options?: (string | Frame36Option)[];
  /**
   * Callback fired when an option is selected
   */
  onSelect?: (option: string) => void;
  /**
   * Optional custom chevron / trailing icon
   */
  chevron?: React.ReactNode;
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
 * Standard Chevron Icon matching Figma stroke geometry
 */
export const ChevronDownIcon: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className = '',
  strokeWidth = 3.2,
}) => (
  <svg
    className={className}
    width="20"
    height="13"
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 2.5L10 10.5L18 2.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Preserved Figma Layer Spec: "Frame 36"
 * Node ID: node-id=31-558 (Figma Node ID: 31:558)
 *
 * Visual spec:
 * - Rounded squircle dropdown selector pill card (border-radius: ~20px).
 * - Left bold typography ("All Fields", weight: 600, font-size: ~22px).
 * - Right thick downward chevron arrow (stroke: ~3.2px).
 * - Three distinct variant states:
 *   1. Default: Flat white card (#FFFFFF) with dark charcoal text & chevron.
 *   2. Gray: Medium slate-gray surface (#8E8E93) with muted charcoal text & chevron.
 *   3. Elevated: Pure white card (#FFFFFF) with soft prominent drop shadow.
 */
export const Frame36: React.FC<Frame36Props> = ({
  variant = 'default',
  label = 'All Fields',
  size = 'md',
  isOpen: controlledIsOpen,
  options,
  onSelect,
  chevron,
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const open = isControlled ? controlledIsOpen : internalOpen;
  const effectiveVariant = variant === 'gray' || disabled ? 'gray' : variant;

  // Sync internal label if prop changes
  useEffect(() => {
    setCurrentLabel(label);
  }, [label]);

  // Click outside listener for interactive dropdown
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        if (!isControlled) setInternalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, isControlled]);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || variant === 'gray') return;
    onClick?.(e);
    if (!isControlled && options && options.length > 0) {
      setInternalOpen(!internalOpen);
    }
  };

  const handleSelect = (val: string, display: string) => {
    setCurrentLabel(display);
    onSelect?.(val);
    if (!isControlled) {
      setInternalOpen(false);
    }
  };

  const isInteractive = !disabled && variant !== 'gray' && (typeof onClick === 'function' || (options && options.length > 0));

  const classNames = [
    'uedp-frame-36',
    `uedp-frame-36--${effectiveVariant}`,
    `uedp-frame-36--size-${size}`,
    open ? 'uedp-frame-36--open' : '',
    fullWidth ? 'uedp-frame-36--full-width' : '',
    isInteractive ? 'uedp-frame-36--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="uedp-frame-36-wrapper" ref={containerRef}>
      <div
        className={classNames}
        onClick={handleToggle}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        aria-haspopup={options && options.length > 0 ? 'listbox' : undefined}
        aria-expanded={open}
        {...props}
      >
        <span className="uedp-frame-36__label">{currentLabel}</span>

        <div className={`uedp-frame-36__chevron ${open ? 'uedp-frame-36__chevron--open' : ''}`}>
          {chevron || <ChevronDownIcon />}
        </div>
      </div>

      {/* Floating dropdown menu when options are provided */}
      {open && options && options.length > 0 && (
        <ul className="uedp-frame-36__menu" role="listbox">
          {options.map((opt) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const text = typeof opt === 'string' ? opt : opt.label;
            const isSelected = text === currentLabel;

            return (
              <li
                key={val}
                className={`uedp-frame-36__menu-item ${isSelected ? 'uedp-frame-36__menu-item--selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(val, text);
                }}
                role="option"
                aria-selected={isSelected}
              >
                <span>{text}</span>
                {isSelected && <span className="uedp-frame-36__menu-check">&bull;</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export interface Frame36GroupProps {
  label?: string;
  size?: Frame36Size;
  onSelectVariant?: (variant: Frame36Variant) => void;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 3-state Component Set:
 * Enclosed within the purple dashed border with "❖ Frame 36" badge.
 */
export const Frame36Group: React.FC<Frame36GroupProps> = ({
  label = 'All Fields',
  size = 'md',
  onSelectVariant,
  className = '',
}) => {
  const variants: Frame36Variant[] = ['default', 'gray', 'elevated'];

  return (
    <div className={`uedp-frame-36-canvas-container ${className}`}>
      {/* Component Set Badge */}
      <div className="uedp-frame-36-canvas-badge">
        <span className="uedp-frame-36-canvas-badge__icon">&#10070;</span>
        <span className="uedp-frame-36-canvas-badge__text">Frame 36</span>
      </div>

      {/* Purple dashed component set boundary matching Figma */}
      <div className="uedp-frame-36-component-set">
        {variants.map((v) => (
          <Frame36
            key={v}
            variant={v}
            label={label}
            size={size}
            onClick={() => onSelectVariant?.(v)}
          />
        ))}
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const AllFieldsSelect = Frame36;
export const SelectDropdownPill = Frame36;
export const Frame36ComponentSet = Frame36Group;
export default Frame36;
