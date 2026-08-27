import React, { useState } from 'react';
import './DateFilters.css';

export interface DateFiltersProps {
  /** Active preset button */
  activePreset?: 'Today' | '7D' | '30D' | '90D' | 'YTD' | 'Custom';
  /** Start date string (YYYY-MM-DD) */
  startDate?: string;
  /** End date string (YYYY-MM-DD) */
  endDate?: string;
  /** Callback on preset selection */
  onSelectPreset?: (preset: string) => void;
  /** Callback on custom date change */
  onDateChange?: (start: string, end: string) => void;
}

/**
 * Preserved Figma Layer Name: "Date filters"
 * Node ID: NodeID:320:DateFiltersFrame
 */
export const DateFilters: React.FC<DateFiltersProps> = ({
  activePreset: initialPreset = '30D',
  startDate: initialStart = '2026-07-13',
  endDate: initialEnd = '2026-08-12',
  onSelectPreset,
  onDateChange,
}) => {
  const [preset, setPreset] = useState(initialPreset);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const presets = ['Today', '7D', '30D', '90D', 'YTD', 'Custom'] as const;

  const handlePresetSelect = (p: (typeof presets)[number]) => {
    setPreset(p);
    if (onSelectPreset) onSelectPreset(p);
  };

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
    setPreset('Custom');
    if (onDateChange) onDateChange(e.target.value, end);
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value);
    setPreset('Custom');
    if (onDateChange) onDateChange(start, e.target.value);
  };

  return (
    <div className="uedp-date-filters">
      <div className="uedp-date-filters__presets">
        {presets.map((p) => (
          <button
            key={p}
            className={`uedp-date-filters__chip ${preset === p ? 'uedp-date-filters__chip--active' : ''}`}
            onClick={() => handlePresetSelect(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="uedp-date-filters__range-inputs">
        <div className="uedp-date-filters__input-group">
          <span className="uedp-date-filters__label">From</span>
          <input
            type="date"
            className="uedp-date-filters__input"
            value={start}
            onChange={handleStartChange}
          />
        </div>

        <span className="uedp-date-filters__divider">→</span>

        <div className="uedp-date-filters__input-group">
          <span className="uedp-date-filters__label">To</span>
          <input
            type="date"
            className="uedp-date-filters__input"
            value={end}
            onChange={handleEndChange}
          />
        </div>
      </div>
    </div>
  );
};
