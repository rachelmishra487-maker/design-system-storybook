import React from 'react';
import './Component315.css';

export interface DataRow {
  id: string;
  name: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Pending' | 'Failed';
  timestamp: string;
  value: string;
}

export interface Component315Props {
  /** Table title header */
  title?: string;
  /** Subtitle / row count note */
  subtitle?: string;
  /** Table rows dataset */
  rows?: DataRow[];
  /** Compact table padding */
  compact?: boolean;
}

const defaultRows: DataRow[] = [
  { id: 'TRX-1082', name: 'Design System Variable Sync', category: 'Tokens', status: 'Completed', timestamp: 'Today, 14:20', value: '$4,200.00' },
  { id: 'TRX-1083', name: 'Figma Canvas Node Discovery', category: 'API Parsing', status: 'In Progress', timestamp: 'Today, 13:45', value: '$1,850.50' },
  { id: 'TRX-1084', name: 'Vercel Deployment Pipeline', category: 'DevOps', status: 'Pending', timestamp: 'Yesterday', value: '$920.00' },
  { id: 'TRX-1085', name: 'Storybook Docs Generation', category: 'Documentation', status: 'Completed', timestamp: '08 Aug 2026', value: '$3,100.00' },
  { id: 'TRX-1086', name: 'GA4 Event Listener Injection', category: 'Analytics', status: 'Failed', timestamp: '07 Aug 2026', value: '$0.00' },
];

/**
 * Preserved Figma Layer Name: "Component 315"
 * Node ID: NodeID:315:DataTableFrame
 */
export const Component315: React.FC<Component315Props> = ({
  title = 'Figma System Sync Log',
  subtitle = 'Showing recent automated discovery & token export events',
  rows = defaultRows,
  compact = false,
}) => {
  const getStatusClass = (status: DataRow['status']) => {
    switch (status) {
      case 'Completed':
        return 'uedp-component-315__status--completed';
      case 'In Progress':
        return 'uedp-component-315__status--inprogress';
      case 'Pending':
        return 'uedp-component-315__status--pending';
      case 'Failed':
        return 'uedp-component-315__status--failed';
      default:
        return '';
    }
  };

  return (
    <div className={`uedp-component-315 ${compact ? 'uedp-component-315--compact' : ''}`}>
      <div className="uedp-component-315__header">
        <div>
          <h4 className="uedp-component-315__title">{title}</h4>
          {subtitle && <p className="uedp-component-315__subtitle">{subtitle}</p>}
        </div>
        <button className="uedp-component-315__export-btn">Export CSV</button>
      </div>

      <div className="uedp-component-315__table-wrapper">
        <table className="uedp-component-315__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Timestamp</th>
              <th className="uedp-component-315__align-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <span className="uedp-component-315__id">{row.id}</span>
                </td>
                <td className="uedp-component-315__name">{row.name}</td>
                <td>
                  <span className="uedp-component-315__category-tag">{row.category}</span>
                </td>
                <td>
                  <span className={`uedp-component-315__status ${getStatusClass(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="uedp-component-315__timestamp">{row.timestamp}</td>
                <td className="uedp-component-315__align-right uedp-component-315__value">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
