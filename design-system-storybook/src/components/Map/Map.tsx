import React, { useState } from 'react';
import './Map.css';

export interface MapPin {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'online' | 'warning' | 'offline';
  pingMs: number;
  xPct: number;
  yPct: number;
}

export interface MapProps {
  /** Map view header title */
  title?: string;
  /** Pins data */
  pins?: MapPin[];
  /** Show map controls overlay */
  showControls?: boolean;
}

const defaultPins: MapPin[] = [
  { id: 'pin-ny', name: 'New York Data Center', lat: 40.71, lng: -74.0, status: 'online', pingMs: 14, xPct: 24, yPct: 34 },
  { id: 'pin-ldn', name: 'London Node', lat: 51.5, lng: -0.12, status: 'online', pingMs: 28, xPct: 46, yPct: 28 },
  { id: 'pin-fra', name: 'Frankfurt Hub', lat: 50.11, lng: 8.68, status: 'warning', pingMs: 94, xPct: 52, yPct: 30 },
  { id: 'pin-tok', name: 'Tokyo Edge', lat: 35.67, lng: 139.65, status: 'online', pingMs: 110, xPct: 82, yPct: 40 },
  { id: 'pin-syd', name: 'Sydney Cluster', lat: -33.86, lng: 151.2, status: 'offline', pingMs: 0, xPct: 88, yPct: 78 },
];

/**
 * Preserved Figma Layer Name: "Map"
 * Node ID: NodeID:350:GeoMapFrame
 */
export const Map: React.FC<MapProps> = ({
  title = 'Global Infrastructure Node Map',
  pins = defaultPins,
  showControls = true,
}) => {
  const [activePin, setActivePin] = useState<MapPin | null>(pins[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  return (
    <div className="uedp-map">
      <div className="uedp-map__header">
        <div>
          <h3 className="uedp-map__title">{title}</h3>
          <p className="uedp-map__subtitle">Real-time edge server availability & routing topology</p>
        </div>
        <div className="uedp-map__legend">
          <span className="uedp-map__legend-item"><span className="uedp-map__dot uedp-map__dot--online" /> Online</span>
          <span className="uedp-map__legend-item"><span className="uedp-map__dot uedp-map__dot--warning" /> Warning</span>
          <span className="uedp-map__legend-item"><span className="uedp-map__dot uedp-map__dot--offline" /> Offline</span>
        </div>
      </div>

      <div className="uedp-map__viewport">
        {/* World Map SVG Representation */}
        <div className="uedp-map__canvas" style={{ transform: `scale(${zoomLevel / 100})` }}>
          <svg className="uedp-map__svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path
              className="uedp-map__land"
              d="M150,120 Q200,100 280,140 Q320,180 260,280 Q200,320 120,240 Z 
                 M420,100 Q500,80 580,120 Q600,220 520,280 Q440,240 420,160 Z
                 M700,140 Q850,120 920,220 Q900,340 780,380 Q720,320 700,240 Z
                 M780,360 Q860,350 880,420 Q820,460 760,420 Z"
            />
          </svg>

          {/* Interactive Pins */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className={`uedp-map__pin uedp-map__pin--${pin.status} ${activePin?.id === pin.id ? 'uedp-map__pin--active' : ''}`}
              style={{ left: `${pin.xPct}%`, top: `${pin.yPct}%` }}
              onClick={() => setActivePin(pin)}
            >
              <div className="uedp-map__pin-pulse" />
              <div className="uedp-map__pin-core" />
            </div>
          ))}
        </div>

        {/* Active Pin Tooltip Overlay */}
        {activePin && (
          <div
            className="uedp-map__tooltip"
            style={{ left: `${activePin.xPct}%`, top: `${Math.max(10, activePin.yPct - 18)}%` }}
          >
            <div className="uedp-map__tooltip-header">
              <span className="uedp-map__tooltip-title">{activePin.name}</span>
              <span className={`uedp-map__tooltip-status uedp-map__tooltip-status--${activePin.status}`}>
                {activePin.status.toUpperCase()}
              </span>
            </div>
            <div className="uedp-map__tooltip-body">
              <div>Latency: <strong>{activePin.pingMs} ms</strong></div>
              <div>Coordinates: <code>{activePin.lat}, {activePin.lng}</code></div>
            </div>
          </div>
        )}

        {/* Map Controls */}
        {showControls && (
          <div className="uedp-map__controls">
            <button
              className="uedp-map__ctrl-btn"
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              title="Zoom In"
            >
              +
            </button>
            <span className="uedp-map__zoom-val">{zoomLevel}%</span>
            <button
              className="uedp-map__ctrl-btn"
              onClick={() => setZoomLevel((z) => Math.max(80, z - 10))}
              title="Zoom Out"
            >
              −
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
