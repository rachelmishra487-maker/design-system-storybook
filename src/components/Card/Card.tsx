import React from 'react';
import './Card.css';

export type CardVariant = 'white' | 'gray';
export type CardSize = 'sm' | 'md' | 'lg';
export type CardAlign = 'center' | 'left';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card color variant matching Figma Card (node-id=32-620):
   * - 'white': Pure white surface (#FFFFFF)
   * - 'gray': Slate-gray surface (#8E8E93)
   * @default 'white'
   */
  variant?: CardVariant;
  /**
   * Uppercase metric label (e.g. 'DURATION')
   * @default 'DURATION'
   */
  label?: string;
  /**
   * Primary metric value (e.g. '4 Years')
   * @default '4 Years'
   */
  value?: string;
  /**
   * Custom top icon element (defaults to black circular clock icon)
   */
  icon?: React.ReactNode;
  /**
   * Sizing scale variant
   * @default 'md'
   */
  size?: CardSize;
  /**
   * Content alignment
   * @default 'center'
   */
  align?: CardAlign;
  /**
   * Click handler for interactive selection
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Authentic Circular Clock Icon matching Figma Card spec (Node 32:620)
 */
export const ClockIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 44,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="22" cy="22" r="22" fill="#000000" />
    <path
      d="M22 11V22H31"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Preserved Figma Layer Spec: "Card"
 * Node ID: node-id=32-620 (Figma Node ID: 32:620)
 *
 * Visual spec:
 * - Rounded squircle card (border-radius: ~36px, width: ~260px, height: ~300px).
 * - Center-aligned vertical layout:
 *   1. Black circular clock icon (44px).
 *   2. Uppercase label ("DURATION", font-size: ~20px, weight: 600).
 *   3. Value ("4 Years", font-size: ~30px, weight: 700).
 * - Two distinct color variants (2 Variants):
 *   1. White (#FFFFFF) surface with dark slate label and solid black value.
 *   2. Gray (#8E8E93) surface with muted slate label and solid black value.
 */
export const Card: React.FC<CardProps> = ({
  variant = 'white',
  label = 'DURATION',
  value = '4 Years',
  icon,
  size = 'md',
  align = 'center',
  onClick,
  className = '',
  ...props
}) => {
  const isInteractive = typeof onClick === 'function';

  const classNames = [
    'uedp-card',
    `uedp-card--${variant}`,
    `uedp-card--size-${size}`,
    `uedp-card--align-${align}`,
    isInteractive ? 'uedp-card--interactive' : '',
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
      {/* Icon */}
      <div className="uedp-card__icon-wrap">
        {icon !== undefined ? icon : <ClockIcon size={size === 'sm' ? 36 : size === 'lg' ? 52 : 44} />}
      </div>

      {/* Label */}
      <span className="uedp-card__label">{label}</span>

      {/* Value */}
      <span className="uedp-card__value">{value}</span>
    </div>
  );
};

export interface CardGroupProps {
  label?: string;
  value?: string;
  size?: CardSize;
  onSelectVariant?: (variant: CardVariant) => void;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 2-variant Component Set:
 * White and Gray cards enclosed within the purple dashed container with "❖ Card" header and "2 Variants" footer badge.
 */
export const CardGroup: React.FC<CardGroupProps> = ({
  label = 'DURATION',
  value = '4 Years',
  size = 'md',
  onSelectVariant,
  className = '',
}) => {
  const variants: CardVariant[] = ['white', 'gray'];

  return (
    <div className={`uedp-card-canvas-container ${className}`}>
      {/* Figma Component Set Top Badge */}
      <div className="uedp-card-canvas-badge">
        <span className="uedp-card-canvas-badge__icon">&#10070;</span>
        <span className="uedp-card-canvas-badge__text">Card</span>
      </div>

      {/* Purple dashed component set boundary */}
      <div className="uedp-card-component-set">
        {variants.map((v) => (
          <Card
            key={v}
            variant={v}
            label={label}
            value={value}
            size={size}
            onClick={() => onSelectVariant?.(v)}
          />
        ))}
      </div>

      {/* Figma 2 Variants Footer Badge */}
      <div className="uedp-card-footer-badge-wrap">
        <span className="uedp-card-variants-badge">2 Variants</span>
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const DurationCard = Card;
export const MetricCard = Card;
export const StatCard = Card;
export const CardComponentSet = CardGroup;
export default Card;
