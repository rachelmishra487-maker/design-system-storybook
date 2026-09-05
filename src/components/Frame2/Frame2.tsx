import React from 'react';
import './Frame2.css';

export type Frame2State = 'filled' | 'outline' | 'gray';
export type Frame2Size = 'sm' | 'md' | 'lg';

export interface Frame2Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Selection indicator state matching Figma Frame 2 (node-id=2-10):
   * - 'filled': Solid golden-amber rounded indicator
   * - 'outline': White/transparent indicator with golden-amber border
   * - 'gray': Slate-gray fill with golden-amber border
   * @default 'filled'
   */
  state?: Frame2State;
  /**
   * Title text label
   * @default 'Apply to universities'
   */
  title?: string;
  /**
   * Sizing scale variant
   * @default 'md'
   */
  size?: Frame2Size;
  /**
   * Optional custom indicator element
   */
  indicator?: React.ReactNode;
  /**
   * Optional click handler for selection
   */
  onClick?: () => void;
  /**
   * Full width block
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * Preserved Figma Layer Spec: "Frame 2"
 * Node ID: node-id=2-10 (Figma Node ID: 2:10)
 *
 * Visual spec:
 * - Rounded white pill container card (border-radius: ~44px).
 * - Left rounded indicator squircle (border-radius: ~18px).
 * - Three distinct indicator visual states:
 *   1. Solid Amber fill (#FFB800)
 *   2. White fill with Amber border (#FFB800)
 *   3. Slate-Gray fill (#8E8E93) with Amber border (#FFB800)
 * - Bold midnight dark navy typography ("Apply to universities", weight: 700, #0F172A).
 */
export const Frame2: React.FC<Frame2Props> = ({
  state = 'filled',
  title = 'Apply to universities',
  size = 'md',
  indicator,
  onClick,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const isInteractive = typeof onClick === 'function';

  const classNames = [
    'uedp-frame-2',
    `uedp-frame-2--size-${size}`,
    `uedp-frame-2--${state}`,
    fullWidth ? 'uedp-frame-2--full-width' : '',
    isInteractive ? 'uedp-frame-2--interactive' : '',
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
      {/* Left Squircle Indicator */}
      <div className={`uedp-frame-2__indicator uedp-frame-2__indicator--${state}`}>
        {indicator}
      </div>

      {/* Title Label */}
      <span className="uedp-frame-2__title">{title}</span>
    </div>
  );
};

export interface Frame2GroupProps {
  title?: string;
  size?: Frame2Size;
  activeState?: Frame2State;
  onSelect?: (state: Frame2State) => void;
  className?: string;
}

/**
 * Helper component rendering the exact 3-card stack as displayed in the Figma canvas.
 */
export const Frame2Group: React.FC<Frame2GroupProps> = ({
  title = 'Apply to universities',
  size = 'md',
  onSelect,
  className = '',
}) => {
  const states: Frame2State[] = ['filled', 'outline', 'gray'];

  return (
    <div className={`uedp-frame-2-group ${className}`}>
      {states.map((s) => (
        <Frame2
          key={s}
          state={s}
          title={title}
          size={size}
          onClick={() => onSelect?.(s)}
        />
      ))}
    </div>
  );
};

// Aliases for developer convenience
export const ApplyCard = Frame2;
export const SelectionPillCard = Frame2;
export default Frame2;
