'use client';

import { useState } from 'react';

export default function MapPicker() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-slate-800">Map picker</p>
          <p className="text-sm text-slate-600">Click on the map to set latitude and longitude.</p>
        </div>
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700"
          onClick={() => setCoords({ lat: 0, lng: 0 })}
        >
          Mock select
        </button>
      </div>
      <div className="h-64 rounded-md border border-dashed border-slate-300 bg-slate-50" />
      <p className="text-sm text-slate-700">
        Selected point:{' '}
        {coords ? `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}` : 'None yet'}
      </p>
      <p className="text-xs text-slate-500">Interactive Mapbox picker will be added in M7.</p>
    </div>
  );
}
