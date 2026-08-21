import React, { useState } from 'react';
import './Filters.css';

export interface FiltersProps {
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Filter pill options */
  categories?: string[];
  /** Active selected category */
  activeCategory?: string;
  /** Show view switcher (Grid / List) */
  showViewToggle?: boolean;
  /** Callback on filter change */
  onSelectCategory?: (category: string) => void;
  /** Callback on search text input */
  onSearchChange?: (text: string) => void;
}

/**
 * Preserved Figma Layer Name: "Filters"
 * Node ID: NodeID:310:FiltersFrame
 */
export const Filters: React.FC<FiltersProps> = ({
  searchPlaceholder = 'Filter components or tokens...',
  categories = ['All Items', 'Core UI', 'Navigation', 'Data Display', 'Feedback'],
  activeCategory: initialCategory = 'All Items',
  showViewToggle = true,
  onSelectCategory,
  onSearchChange,
}) => {
  const [selected, setSelected] = useState(initialCategory);
  const [searchValue, setSearchValue] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleCategoryClick = (cat: string) => {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  return (
    <div className="uedp-filters">
      <div className="uedp-filters__search-bar">
        <span className="uedp-filters__search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          className="uedp-filters__search-input"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={handleSearch}
        />
        {searchValue && (
          <button
            className="uedp-filters__clear-btn"
            onClick={() => {
              setSearchValue('');
              if (onSearchChange) onSearchChange('');
            }}
          >
            ✕
          </button>
        )}
      </div>

      <div className="uedp-filters__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`uedp-filters__pill ${selected === cat ? 'uedp-filters__pill--active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {showViewToggle && (
        <div className="uedp-filters__view-toggle">
          <button
            className={`uedp-filters__view-btn ${viewMode === 'grid' ? 'uedp-filters__view-btn--active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid View"
          >
            ⊞
          </button>
          <button
            className={`uedp-filters__view-btn ${viewMode === 'list' ? 'uedp-filters__view-btn--active' : ''}`}
            onClick={() => setViewMode('list')}
            title="List View"
          >
            ☰
          </button>
        </div>
      )}
    </div>
  );
};
