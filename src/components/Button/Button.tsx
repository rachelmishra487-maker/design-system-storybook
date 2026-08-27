import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant matching Figma component set properties (Node ID: 4:30)
   * @default 'primary'
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
 * Node ID: 4:30 (UEDP-5 Design Library)
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
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
      {...props}
    >
      {loading ? (
        <span className="uedp-button__spinner" aria-hidden="true" />
      ) : (
        iconLeft && <span className="uedp-button__icon uedp-button__icon--left">{iconLeft}</span>
      )}
      {children && <span className="uedp-button__label">{children}</span>}
      {!loading && iconRight && <span className="uedp-button__icon uedp-button__icon--right">{iconRight}</span>}
    </button>
  );
};
