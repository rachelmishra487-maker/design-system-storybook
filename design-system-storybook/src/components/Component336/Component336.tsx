import React from 'react';
import './Component336.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled' | 'brand';
export type CardTrendStatus = 'up' | 'down' | 'neutral';
export type CardBadgeVariant = 'success' | 'warning' | 'info' | 'danger' | 'brand';

export interface Component336Props {
  /**
   * Card visual variant
   * @default 'elevated'
   */
  variant?: CardVariant;
  /**
   * Metric Card Title
   */
  title?: string;
  /**
   * Primary numeric or status metric value
   */
  value?: string | number;
  /**
   * Secondary trend indicator percentage or string
   */
  trendValue?: string;
  /**
   * Trend direction status
   * @default 'up'
   */
  trendStatus?: CardTrendStatus;
  /**
   * Status tag badge label
   */
  statusLabel?: string;
  /**
   * Badge color variant
   * @default 'success'
   */
  badgeVariant?: CardBadgeVariant;
  /**
   * Optional leading icon or icon element
   */
  icon?: React.ReactNode;
  /**
   * Optional icon background accent color
   */
  iconVariant?: 'orange' | 'blue' | 'green' | 'purple' | 'slate';
  /**
   * Optional progress percentage (0 - 100)
   */
  progress?: number;
  /**
   * Subtitle / date range comparison note
   */
  subtitle?: string;
  /**
   * Show interactive actions menu dot icon
   * @default true
   */
  showMenu?: boolean;
  /**
   * Click handler for the card
   */
  onClick?: () => void;
  /**
   * Click handler for the menu button
   */
  onMenuClick?: (e: React.MouseEvent) => void;
  /**
   * Additional custom CSS classes
   */
  className?: string;
  /**
   * Optional children for custom content cards
   */
  children?: React.ReactNode;
}

/**
 * Preserved Figma Layer Name: "Component 336" / Card (Figma Node ID: 32:580 / 336)
 */
export const Component336: React.FC<Component336Props> = ({
  variant = 'elevated',
  title = 'System Revenue',
  value = '$124,850.00',
  trendValue = '+14.2%',
  trendStatus = 'up',
  statusLabel = 'Active Goal',
  badgeVariant = 'success',
  icon,
  iconVariant = 'orange',
  progress,
  subtitle = 'Compared to last month ($109,280)',
  showMenu = true,
  onClick,
  onMenuClick,
  className = '',
  children,
}) => {
  const cardClasses = [
    'uedp-component-336',
    `uedp-component-336--${variant}`,
    onClick ? 'uedp-component-336--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {/* Card Header */}
      <div className="uedp-component-336__header">
        <div className="uedp-component-336__title-container">
          {icon && (
            <div className={`uedp-component-336__icon uedp-component-336__icon--${iconVariant}`}>
              {icon}
            </div>
          )}
          <div>
            <div className="uedp-component-336__title-wrap">
              <span className="uedp-component-336__title">{title}</span>
              {statusLabel && (
                <span className={`uedp-component-336__badge uedp-component-336__badge--${badgeVariant}`}>
                  {statusLabel}
                </span>
              )}
            </div>
          </div>
        </div>

        {showMenu && (
          <button
            className="uedp-component-336__menu-btn"
            aria-label="Card Options"
            onClick={(e) => {
              e.stopPropagation();
              if (onMenuClick) onMenuClick(e);
            }}
          >
            •••
          </button>
        )}
      </div>

      {/* Card Body / Metric Display */}
      {value !== undefined && (
        <div className="uedp-component-336__body">
          <div className="uedp-component-336__value">{value}</div>
          {trendValue && (
            <div className={`uedp-component-336__trend uedp-component-336__trend--${trendStatus}`}>
              <span className="uedp-component-336__trend-arrow" aria-hidden="true">
                {trendStatus === 'up' && '▲'}
                {trendStatus === 'down' && '▼'}
                {trendStatus === 'neutral' && '●'}
              </span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
      )}

      {/* Progress Bar (if provided) */}
      {typeof progress === 'number' && (
        <div className="uedp-component-336__progress-container">
          <div className="uedp-component-336__progress-bar">
            <div
              className={`uedp-component-336__progress-fill uedp-component-336__progress-fill--${trendStatus}`}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
          <span className="uedp-component-336__progress-label">{progress}% Target</span>
        </div>
      )}

      {/* Custom Children */}
      {children && <div className="uedp-component-336__content">{children}</div>}

      {/* Subtitle / Footer Note */}
      {subtitle && (
        <div className="uedp-component-336__footer">
          <span className="uedp-component-336__subtitle">{subtitle}</span>
        </div>
      )}
    </div>
  );
};

// Also export as Card alias for convenience
export const Card = Component336;
