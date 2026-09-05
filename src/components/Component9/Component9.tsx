import React from 'react';
import './Component9.css';

export type Component9Variant = 'active' | 'inactive';
export type Component9Size = 'sm' | 'md' | 'lg';

export interface Component9Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card visual variant matching Figma Component 9 (node-id=29-447):
   * - 'active' (default): Crisp white card with vibrant hero image and high-contrast typography
   * - 'inactive': Slate-gray card (#8E8E93) with desaturated hero image and muted typography
   * @default 'active'
   */
  variant?: Component9Variant;
  /**
   * Heading title
   * @default 'About the\nInstitution'
   */
  title?: string;
  /**
   * Body description paragraph
   * @default 'Founded in 1827, the University of Toronto has evolved into Canada’s leading institution of learning, discovery, and knowledge creation. We are one of the world’s top research-intensive universities, driven to invent and innovate.'
   */
  description?: string;
  /**
   * Image source URL
   * @default '/university_campus.jpg'
   */
  imageSrc?: string;
  /**
   * Overlaid watermark/logo text on hero image
   * @default 'Toronto'
   */
  imageOverlayText?: string;
  /**
   * Action link label
   * @default 'Read More'
   */
  actionLabel?: string;
  /**
   * Callback fired when action link is clicked
   */
  onActionClick?: () => void;
  /**
   * Sizing scale variant
   * @default 'md'
   */
  size?: Component9Size;
  /**
   * Full width container
   * @default false
   */
  fullWidth?: boolean;
}

const DEFAULT_TITLE = 'About the\nInstitution';
const DEFAULT_DESC =
  'Founded in 1827, the University of Toronto has evolved into Canada’s leading institution of learning, discovery, and knowledge creation. We are one of the world’s top research-intensive universities, driven to invent and innovate.';
const DEFAULT_IMAGE = '/university_campus.jpg';

/**
 * Preserved Figma Layer Spec: "Component 9"
 * Node ID: node-id=29-447 (Figma Node ID: 29:447)
 *
 * Visual spec:
 * - Rounded institution profile card (border-radius: ~38px, width: ~360px, height: ~500px).
 * - Hero campus image at the top with overlaid "Toronto" / "University of Toronto" watermark.
 * - Bold two-line heading ("About the\nInstitution", weight: 700, font-size: ~28px).
 * - Detailed body paragraph text with high readability.
 * - Right-aligned "Read More" footer action link.
 * - Two distinct variant states:
 *   1. Active: Pure white card (#FFFFFF) with high-contrast black typography and full-color photo.
 *   2. Inactive: Medium slate-gray card (#8E8E93) with muted typography and dimmed desaturated photo.
 */
export const Component9: React.FC<Component9Props> = ({
  variant = 'active',
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  imageSrc = DEFAULT_IMAGE,
  imageOverlayText = 'Toronto',
  actionLabel = 'Read More',
  onActionClick,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const classNames = [
    'uedp-component-9',
    `uedp-component-9--${variant}`,
    `uedp-component-9--size-${size}`,
    fullWidth ? 'uedp-component-9--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {/* Hero Campus Image Container */}
      <div className="uedp-component-9__image-container">
        <img
          src={imageSrc}
          alt="University campus"
          className="uedp-component-9__image"
          onError={(e) => {
            // Fallback to relative path if absolute fails in different environments
            const target = e.currentTarget;
            if (!target.src.endsWith('university_campus.jpg')) {
              target.src = './university_campus.jpg';
            }
          }}
        />
        {/* Overlay Text Badge */}
        <div className="uedp-component-9__image-overlay">
          {variant === 'inactive' ? (
            <div className="uedp-component-9__watermark-group">
              <span className="uedp-component-9__watermark-sub">University of</span>
              <span className="uedp-component-9__watermark-main">Toronto</span>
            </div>
          ) : (
            <span className="uedp-component-9__watermark-main">{imageOverlayText}</span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="uedp-component-9__content">
        {/* Title */}
        <h3 className="uedp-component-9__title">
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>

        {/* Description Body */}
        <p className="uedp-component-9__description">{description}</p>

        {/* Footer Action */}
        <div className="uedp-component-9__footer">
          <button
            type="button"
            className="uedp-component-9__action"
            onClick={onActionClick}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export interface Component9GroupProps {
  size?: Component9Size;
  onSelectVariant?: (variant: Component9Variant) => void;
  className?: string;
}

/**
 * Authentic Figma Artboard representation rendering the exact 2-card Component Set:
 * Active and Inactive cards side-by-side enclosed within the purple dashed container with "❖ Component 9" header.
 */
export const Component9Group: React.FC<Component9GroupProps> = ({
  size = 'md',
  onSelectVariant,
  className = '',
}) => {
  const variants: Component9Variant[] = ['active', 'inactive'];

  return (
    <div className={`uedp-component-9-canvas-container ${className}`}>
      {/* Figma Component Set Top Badge */}
      <div className="uedp-component-9-canvas-badge">
        <span className="uedp-component-9-canvas-badge__icon">&#10070;</span>
        <span className="uedp-component-9-canvas-badge__text">Component 9</span>
      </div>

      {/* Purple dashed component set boundary */}
      <div className="uedp-component-9-component-set">
        {variants.map((v) => (
          <Component9
            key={v}
            variant={v}
            size={size}
            onClick={() => onSelectVariant?.(v)}
          />
        ))}
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const InstitutionCard = Component9;
export const AboutInstitutionCard = Component9;
export const UniversityCard = Component9;
export const Component9ComponentSet = Component9Group;
export default Component9;
