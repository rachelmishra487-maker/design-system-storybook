import React from 'react';
import './Frame18.css';

export type Frame18Size = 'sm' | 'md' | 'lg';

export interface Frame18Props {
  /**
   * Label for the primary left action (default: 'Direction')
   */
  directionLabel?: string;
  /**
   * Label for the secondary right action (default: 'Call')
   */
  callLabel?: string;
  /**
   * Click handler for the Direction action
   */
  onDirectionClick?: () => void;
  /**
   * Click handler for the Call action
   */
  onCallClick?: () => void;
  /**
   * Sizing scale variant
   * - 'sm': 220px × 38px
   * - 'md': 266px × 46px (Exact Figma Spec)
   * - 'lg': 320px × 54px
   * @default 'md'
   */
  size?: Frame18Size;
  /**
   * Full width mode expanding to 100% of parent width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Custom background color for the Direction action button
   * @default '#C2410C'
   */
  directionBg?: string;
  /**
   * Custom background color for the Call action button
   * @default '#FFFFFF'
   */
  callBg?: string;
  /**
   * Disable interactions
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional custom container CSS class
   */
  className?: string;
}

/**
 * Preserved Figma Layer Spec: "Component 2/Frame 18"
 * Node ID: node-id=4-30 (Figma Node ID: 4:30)
 * Dimensions: 266 × 46 Hug
 *
 * Visual spec:
 * - Segmented / dual action button bar.
 * - Left button: Burnt orange (#C2410C) with bold white "Direction" text.
 * - Right button: Clean white (#FFFFFF) with dark charcoal "Call" text.
 * - Gap between buttons: 12px (exposing the canvas/parent frame background).
 * - Sharp rectangular edges (border-radius: 0px).
 */
export const Component2Frame18: React.FC<Frame18Props> = ({
  directionLabel = 'Direction',
  callLabel = 'Call',
  onDirectionClick,
  onCallClick,
  size = 'md',
  fullWidth = false,
  directionBg,
  callBg,
  disabled = false,
  className = '',
}) => {
  const containerClasses = [
    'uedp-frame-18',
    `uedp-frame-18--${size}`,
    fullWidth ? 'uedp-frame-18--full-width' : '',
    disabled ? 'uedp-frame-18--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={containerClasses}
      role="group"
      aria-label="Location Actions"
    >
      {/* Direction Action Button (Left - Burnt Orange) */}
      <button
        type="button"
        className="uedp-frame-18__btn uedp-frame-18__btn--direction"
        style={directionBg ? { backgroundColor: directionBg } : undefined}
        onClick={onDirectionClick}
        disabled={disabled}
        aria-label={directionLabel}
      >
        <span className="uedp-frame-18__label">{directionLabel}</span>
      </button>

      {/* Call Action Button (Right - White) */}
      <button
        type="button"
        className="uedp-frame-18__btn uedp-frame-18__btn--call"
        style={callBg ? { backgroundColor: callBg } : undefined}
        onClick={onCallClick}
        disabled={disabled}
        aria-label={callLabel}
      >
        <span className="uedp-frame-18__label">{callLabel}</span>
      </button>
    </div>
  );
};

// Aliases for developer convenience
export const Frame18 = Component2Frame18;
export const DirectionCallBar = Component2Frame18;
export default Component2Frame18;
