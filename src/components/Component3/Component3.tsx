import React from 'react';
import './Component3.css';

export type StepStatus = 'completed' | 'active' | 'upcoming' | 'disabled';

export interface StepItem {
  /** Step number or identifier */
  number?: number | string;
  /** Optional descriptive label under the step */
  label?: string;
  /** Explicit status override */
  status?: StepStatus;
  /** Optional custom background color for the circle */
  color?: string;
  /** Optional custom text color */
  textColor?: string;
}

export interface Component3Props {
  /**
   * Current active step (1-based index)
   * @default 2
   */
  currentStep?: number;
  /**
   * Total number of steps when using automatic numbering
   * @default 4
   */
  totalSteps?: number;
  /**
   * Custom step items array with custom labels or statuses
   */
  steps?: StepItem[];
  /**
   * Click handler when a step is selected
   */
  onStepClick?: (stepNumber: number) => void;
  /**
   * Size variant for the step circles
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Show line extension/overhang before step 1 and after last step
   * @default true
   */
  lineOverhang?: boolean;
  /**
   * Additional custom CSS classes
   */
  className?: string;
}

/**
 * Preserved Figma Layer Name: "Component 3"
 * Node ID: node-id=0-1
 *
 * Visual spec:
 * - Horizontal central track line in solid dark/black.
 * - Completed steps (prior to active): solid golden-amber fill with white bold text.
 * - Active step: solid vibrant coral-orange fill with white bold text and subtle translucent outer halo.
 * - Upcoming steps: solid light slate/off-white fill with dark slate bold text.
 */
export const Component3: React.FC<Component3Props> = ({
  currentStep = 2,
  totalSteps = 4,
  steps: customSteps,
  onStepClick,
  size = 'md',
  lineOverhang = true,
  className = '',
}) => {
  // Build resolved steps list
  const resolvedSteps: StepItem[] =
    customSteps && customSteps.length > 0
      ? customSteps
      : Array.from({ length: totalSteps }, (_, i) => {
          const stepNum = i + 1;
          let status: StepStatus = 'upcoming';
          if (stepNum < currentStep) {
            status = 'completed';
          } else if (stepNum === currentStep) {
            status = 'active';
          }
          return {
            number: stepNum,
            status,
          };
        });

  const getStepStatus = (item: StepItem, index: number): StepStatus => {
    if (item.status) return item.status;
    const stepNum = index + 1;
    if (stepNum < currentStep) return 'completed';
    if (stepNum === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div
      className={`uedp-component-3 uedp-component-3--size-${size} ${
        lineOverhang ? 'uedp-component-3--with-overhang' : ''
      } ${className}`}
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={resolvedSteps.length}
      aria-label="Progress Stepper"
    >
      {/* Central Connecting Black Track Line */}
      <div className="uedp-component-3__track" aria-hidden="true" />

      {/* Steps List */}
      <div className="uedp-component-3__steps">
        {resolvedSteps.map((step, index) => {
          const stepNum = typeof step.number !== 'undefined' ? step.number : index + 1;
          const status = getStepStatus(step, index);
          const isInteractive = typeof onStepClick === 'function';

          const circleClasses = [
            'uedp-component-3__circle',
            `uedp-component-3__circle--${status}`,
            isInteractive ? 'uedp-component-3__circle--interactive' : '',
          ]
            .filter(Boolean)
            .join(' ');

          const customStyle: React.CSSProperties = {
            ...(step.color ? { backgroundColor: step.color } : {}),
            ...(step.textColor ? { color: step.textColor } : {}),
          };

          return (
            <div key={index} className="uedp-component-3__step-node">
              <button
                type="button"
                className={circleClasses}
                style={customStyle}
                onClick={() => {
                  if (isInteractive && typeof stepNum === 'number') {
                    onStepClick(stepNum);
                  }
                }}
                disabled={!isInteractive || status === 'disabled'}
                aria-current={status === 'active' ? 'step' : undefined}
                aria-label={`Step ${stepNum}${step.label ? `: ${step.label}` : ''} (${status})`}
              >
                <span className="uedp-component-3__number">{stepNum}</span>
              </button>

              {step.label && (
                <span
                  className={`uedp-component-3__label uedp-component-3__label--${status}`}
                >
                  {step.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Aliases for developer convenience
export const Stepper = Component3;
export const StepIndicator = Component3;
export default Component3;
