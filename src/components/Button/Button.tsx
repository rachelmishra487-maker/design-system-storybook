import React from 'react';
import './Button.css';

export type ButtonVariant =
  | 'next'
  | 'back'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'link';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual hierarchy variant matching Figma Component Set (Node ID: 2:75 & 4:30)
   * - 'next': Golden-amber rectangular action button with lowercase slate text
   * - 'back': Subtle transparent text action button with muted gray text
   * @default 'next'
   */
  variant?: ButtonVariant;
  /**
   * Button scale sizing
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Optional leading icon
   */
  iconLeft?: React.ReactNode;
  /**
   * Optional trailing icon
   */
  iconRight?: React.ReactNode;
  /**
   * Full width block button
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Loading state showing animated spinner
   * @default false
   */
  loading?: boolean;
  /**
   * Text label or element content
   */
  children?: React.ReactNode;
}

/**
 * Preserved Figma Layer Spec: "Button"
 * Node ID: node-id=2-75 (Figma Node ID: 2:75)
 *
 * Visual spec:
 * - 'next': Amber block button with subtle warm gradient, sharp corners, lowercase slate-gray text.
 * - 'back': Clean transparent text button with medium-gray typography.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'next',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  // Determine default text if not explicitly provided
  const resolvedChildren =
    children !== undefined
      ? children
      : variant === 'back'
      ? 'Back'
      : variant === 'next'
      ? 'next'
      : 'Button';

  const classNames = [
    'uedp-button',
    `uedp-button--${variant}`,
    `uedp-button--${size}`,
    fullWidth ? 'uedp-button--full' : '',
    loading ? 'uedp-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      type={props.type || 'button'}
      {...props}
    >
      {loading ? (
        <span className="uedp-button__spinner" aria-hidden="true" />
      ) : (
        iconLeft && <span className="uedp-button__icon uedp-button__icon--left">{iconLeft}</span>
      )}
      <span className="uedp-button__label">{resolvedChildren}</span>
      {!loading && iconRight && <span className="uedp-button__icon uedp-button__icon--right">{iconRight}</span>}
    </button>
  );
};

export interface ButtonNavigationPairProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  className?: string;
}

/**
 * Navigation Button Pair (Back + next) matching Figma Node 2:75
 */
export const ButtonNavigationPair: React.FC<ButtonNavigationPairProps> = ({
  onBack,
  onNext,
  backLabel = 'Back',
  nextLabel = 'next',
  className = '',
}) => (
  <div className={`uedp-button-nav-pair ${className}`}>
    <Button variant="back" onClick={onBack}>
      {backLabel}
    </Button>
    <Button variant="next" onClick={onNext}>
      {nextLabel}
    </Button>
  </div>
);

export default Button;
