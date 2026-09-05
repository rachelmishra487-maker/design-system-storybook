import React, { useState, forwardRef } from 'react';
import './Checkbox.css';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Checked state (controlled)
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled)
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Sizing scale:
   * - 'sm': 24px (compact standard form UI)
   * - 'md': 60px (exact Figma Checkbox spec: Node ID 2:24)
   * - 'lg': 72px (prominent display scale)
   * @default 'md'
   */
  size?: CheckboxSize;
  /**
   * Optional text label displayed alongside checkbox
   */
  label?: string;
  /**
   * Position of the label relative to checkbox
   * @default 'right'
   */
  labelPosition?: 'left' | 'right';
  /**
   * Whether to render a white checkmark icon when checked.
   * By default matching Figma Node 2:24, it renders the pure geometric amber squircle.
   * @default false
   */
  showIcon?: boolean;
  /**
   * Change callback
   */
  onChange?: (checked: boolean) => void;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
}

/**
 * Checkmark SVG for optional icon mode
 */
const CheckIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 11L10.5 18.5L25 3.5"
      stroke="#FFFFFF"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Preserved Figma Layer Spec: "Checkbox"
 * Node ID: node-id=2-24 (Figma Node ID: 2:24)
 *
 * Visual spec:
 * - Rounded squircle checkbox control (border-radius: ~18px for 60px size).
 * - Two distinct variant states:
 *   1. Checked: Solid golden-amber fill (#FFB800), no border.
 *   2. Unchecked: Pure white fill (#FFFFFF) with golden-amber border (#FFB800, ~2.5px).
 * - Used as standalone control and as the selection indicator in Frame 2.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      size = 'md',
      label,
      labelPosition = 'right',
      showIcon = false,
      onChange,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const generatedId = id || (label ? `uedp-checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    const handleToggle = () => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onChange?.(next);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleToggle();
      }
    };

    const controlElement = (
      <div
        className={[
          'uedp-checkbox__control',
          `uedp-checkbox__control--${isChecked ? 'checked' : 'unchecked'}`,
          `uedp-checkbox__control--size-${size}`,
          disabled ? 'uedp-checkbox__control--disabled' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {/* Hidden accessible native input */}
        <input
          ref={ref}
          type="checkbox"
          id={generatedId}
          checked={isChecked}
          disabled={disabled}
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          className="uedp-checkbox__native-input"
          {...props}
        />

        {/* Optional check icon if showIcon=true */}
        {isChecked && showIcon && <CheckIcon className="uedp-checkbox__icon" />}
      </div>
    );

    if (!label) {
      return (
        <div className={`uedp-checkbox-wrapper ${className}`}>
          {controlElement}
        </div>
      );
    }

    return (
      <label
        htmlFor={generatedId}
        className={[
          'uedp-checkbox-labeled',
          `uedp-checkbox-labeled--${labelPosition}`,
          `uedp-checkbox-labeled--size-${size}`,
          disabled ? 'uedp-checkbox-labeled--disabled' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {labelPosition === 'left' && <span className="uedp-checkbox__label">{label}</span>}
        {controlElement}
        {labelPosition === 'right' && <span className="uedp-checkbox__label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface CheckboxGroupProps {
  size?: CheckboxSize;
  showIcon?: boolean;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 2-state Component Set:
 * Checked (Solid Amber) and Unchecked (White with Amber Border) inside the purple dashed container.
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  size = 'md',
  showIcon = false,
  className = '',
}) => {
  return (
    <div className={`uedp-checkbox-canvas-container ${className}`}>
      {/* Component Set Badge */}
      <div className="uedp-checkbox-canvas-badge">
        <span className="uedp-checkbox-canvas-badge__icon">&#10070;</span>
        <span className="uedp-checkbox-canvas-badge__text">Checkbox</span>
      </div>

      {/* Purple dashed component set boundary matching Figma */}
      <div className="uedp-checkbox-component-set">
        {/* State 1: Checked (Top) */}
        <Checkbox checked={true} size={size} showIcon={showIcon} />

        {/* State 2: Unchecked (Bottom) */}
        <Checkbox checked={false} size={size} showIcon={showIcon} />
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const SquircleCheckbox = Checkbox;
export const GoUniCheckbox = Checkbox;
export const CheckboxComponentSet = CheckboxGroup;
export default Checkbox;
