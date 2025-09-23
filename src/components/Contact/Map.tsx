"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function NYMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="section-padding pt-0">
        <div className="container">
          <div className="rounded-4 shadow-sm overflow-hidden">
            <div 
              className="leaflet-placeholder" 
              style={{ 
                height: '400px', 
                background: '#f8f9fa', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <p className="text-muted">Loading map...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="rounded-4 shadow-sm overflow-hidden">
          <div 
            id="map" 
            style={{ height: '400px', width: '100%' }}
            className="leaflet"
          />
        </div>
      </div>
    </section>
  );
}
