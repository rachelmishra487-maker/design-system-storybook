import React, { useState } from 'react';
import './Zones.css';

export interface ZoneItem {
  id: string;
  name: string;
  code: string;
  status: 'Operational' | 'Degraded' | 'Maintenance';
  latencyMs: number;
  utilizationPct: number;
}

export interface ZonesProps {
  /** Zone region title */
  title?: string;
  /** Zone items list */
  zones?: ZoneItem[];
  /** Initially selected zone ID */
  selectedZoneId?: string;
  /** Callback when zone is clicked */
  onSelectZone?: (zone: ZoneItem) => void;
}

const defaultZones: ZoneItem[] = [
  { id: 'zone-us-east', name: 'US East (N. Virginia)', code: 'us-east-1', status: 'Operational', latencyMs: 12, utilizationPct: 64 },
  { id: 'zone-us-west', name: 'US West (Oregon)', code: 'us-west-2', status: 'Operational', latencyMs: 38, utilizationPct: 42 },
  { id: 'zone-eu-west', name: 'Europe (Frankfurt)', code: 'eu-central-1', status: 'Degraded', latencyMs: 104, utilizationPct: 88 },
  { id: 'zone-ap-south', name: 'Asia Pacific (Mumbai)', code: 'ap-south-1', status: 'Operational', latencyMs: 142, utilizationPct: 51 },
  { id: 'zone-sa-east', name: 'South America (São Paulo)', code: 'sa-east-1', status: 'Maintenance', latencyMs: 190, utilizationPct: 15 },
];

/**
 * Preserved Figma Layer Name: "Zones"
 * Node ID: NodeID:340:ZonesGridFrame
 */
export const Zones: React.FC<ZonesProps> = ({
  title = 'Global Availability Zones',
  zones = defaultZones,
  selectedZoneId = 'zone-us-east',
  onSelectZone,
}) => {
  const [activeId, setActiveId] = useState(selectedZoneId);

  const handleZoneClick = (zone: ZoneItem) => {
    setActiveId(zone.id);
    if (onSelectZone) onSelectZone(zone);
  };

  const getStatusBadge = (status: ZoneItem['status']) => {
    switch (status) {
      case 'Operational':
        return <span className="uedp-zones__badge uedp-zones__badge--op">● Operational</span>;
      case 'Degraded':
        return <span className="uedp-zones__badge uedp-zones__badge--deg">▲ Degraded</span>;
      case 'Maintenance':
        return <span className="uedp-zones__badge uedp-zones__badge--maint">■ Maintenance</span>;
    }
  };

  return (
    <div className="uedp-zones">
      <div className="uedp-zones__header">
        <h3 className="uedp-zones__title">{title}</h3>
        <span className="uedp-zones__count">{zones.length} Active Zones</span>
      </div>

      <div className="uedp-zones__grid">
        {zones.map((z) => (
          <div
            key={z.id}
            className={`uedp-zones__card ${activeId === z.id ? 'uedp-zones__card--active' : ''}`}
            onClick={() => handleZoneClick(z)}
          >
            <div className="uedp-zones__card-header">
              <div className="uedp-zones__card-name">{z.name}</div>
              {getStatusBadge(z.status)}
            </div>

            <code className="uedp-zones__code">{z.code}</code>

            <div className="uedp-zones__metrics">
              <div className="uedp-zones__metric">
                <span className="uedp-zones__metric-label">Latency</span>
                <span className="uedp-zones__metric-val">{z.latencyMs} ms</span>
              </div>
              <div className="uedp-zones__metric">
                <span className="uedp-zones__metric-label">Utilization</span>
                <span className="uedp-zones__metric-val">{z.utilizationPct}%</span>
              </div>
            </div>

            <div className="uedp-zones__progress-bar">
              <div
                className={`uedp-zones__progress-fill ${z.utilizationPct > 80 ? 'uedp-zones__progress-fill--high' : ''}`}
                style={{ width: `${z.utilizationPct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
