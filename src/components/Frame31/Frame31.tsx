import React from 'react';
import './Frame31.css';

export type Frame31Variant = 'amber' | 'neutral' | 'elevated' | 'selected' | 'unselected' | 'active';
export type Frame31Size = 'sm' | 'md' | 'lg';

export interface Frame31Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card visual variant matching Figma Frame 31 (node-id=31-492):
   * - 'amber' (or 'selected'): Golden-amber border (#FFB800)
   * - 'neutral' (or 'unselected'): Subtle slate-gray border (#B4BAC2)
   * - 'elevated' (or 'active'): Golden-amber border with heavy elevated drop shadow
   * @default 'amber'
   */
  variant?: Frame31Variant;
  /**
   * Main title heading
   * @default 'Business Administration'
   */
  title?: string;
  /**
   * Subtitle / description
   * @default 'Rotman School of Management excellence'
   */
  subtitle?: string;
  /**
   * Sizing scale variant
   * @default 'md'
   */
  size?: Frame31Size;
  /**
   * Convenience boolean shorthand for amber border selection
   */
  selected?: boolean;
  /**
   * Convenience boolean shorthand for elevated drop shadow
   */
  elevated?: boolean;
  /**
   * Full width container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Click handler for selection/interaction
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Preserved Figma Layer Spec: "Frame 31"
 * Node ID: node-id=31-492 (Figma Node ID: 31:492)
 *
 * Visual spec:
 * - Capsule squircle card (border-radius: ~52px).
 * - Light silvery-gray surface fill (#DCE0E5).
 * - Bold title ("Business Administration", font-size: ~30px, weight: 700).
 * - Descriptive subtitle ("Rotman School of Management excellence", font-size: ~18px, weight: 400).
 * - Three distinct variant states (3 Variants):
 *   1. Amber: 4.5px solid golden-amber border (#FFB800) with standard soft shadow.
 *   2. Neutral: 3px solid slate-gray border (#B4BAC2) with standard soft shadow.
 *   3. Elevated: 5px solid golden-amber border (#FFB800) with prominent elevated warm shadow.
 */
export const Frame31: React.FC<Frame31Props> = ({
  variant = 'amber',
  title = 'Business Administration',
  subtitle = 'Rotman School of Management excellence',
  size = 'md',
  selected,
  elevated,
  fullWidth = false,
  onClick,
  className = '',
  ...props
}) => {
  // Normalize variant aliases
  let effectiveVariant = variant;
  if (selected !== undefined) {
    effectiveVariant = selected ? (elevated ? 'elevated' : 'amber') : 'neutral';
  } else if (elevated) {
    effectiveVariant = 'elevated';
  } else if (variant === 'selected') {
    effectiveVariant = 'amber';
  } else if (variant === 'unselected') {
    effectiveVariant = 'neutral';
  } else if (variant === 'active') {
    effectiveVariant = 'elevated';
  }

  const isInteractive = typeof onClick === 'function';

  const classNames = [
    'uedp-frame-31',
    `uedp-frame-31--${effectiveVariant}`,
    `uedp-frame-31--size-${size}`,
    fullWidth ? 'uedp-frame-31--full-width' : '',
    isInteractive ? 'uedp-frame-31--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    >
      <h3 className="uedp-frame-31__title">{title}</h3>
      <p className="uedp-frame-31__subtitle">{subtitle}</p>
    </div>
  );
};

export interface Frame31GroupProps {
  title?: string;
  subtitle?: string;
  size?: Frame31Size;
  onSelectVariant?: (variant: Frame31Variant) => void;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 3-variant Component Set:
 * Enclosed within the purple dashed container with "❖ Frame 31" header and "3 Variants" footer badge.
 */
export const Frame31Group: React.FC<Frame31GroupProps> = ({
  title = 'Business Administration',
  subtitle = 'Rotman School of Management excellence',
  size = 'md',
  onSelectVariant,
  className = '',
}) => {
  const variants: Frame31Variant[] = ['amber', 'neutral', 'elevated'];

  return (
    <div className={`uedp-frame-31-canvas-container ${className}`}>
      {/* Figma Component Set Top Badge */}
      <div className="uedp-frame-31-canvas-badge">
        <span className="uedp-frame-31-canvas-badge__icon">&#10070;</span>
        <span className="uedp-frame-31-canvas-badge__text">Frame 31</span>
      </div>

      {/* Purple dashed component set boundary */}
      <div className="uedp-frame-31-component-set">
        {variants.map((v) => (
          <Frame31
            key={v}
            variant={v}
            title={title}
            subtitle={subtitle}
            size={size}
            onClick={() => onSelectVariant?.(v)}
          />
        ))}
      </div>

      {/* Figma 3 Variants Footer Badge */}
      <div className="uedp-frame-31-footer-badge-wrap">
        <span className="uedp-frame-31-variants-badge">3 Variants</span>
        <div className="uedp-frame-31-plus-badge">+</div>
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const ProgramCard = Frame31;
export const BusinessAdministrationCard = Frame31;
export const FacultyCard = Frame31;
export const Frame31ComponentSet = Frame31Group;
export default Frame31;
