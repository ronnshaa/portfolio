'use client';

import { useState } from 'react';

export default function PhotoUploader() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-slate-800">Photos</p>
          <p className="text-sm text-slate-600">Upload up to 5 photos for a viewpoint.</p>
        </div>
        <label className="cursor-pointer rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
          />
          Choose files
        </label>
      </div>
      {files.length > 0 && (
        <ul className="grid gap-2 text-sm text-slate-700">
          {files.slice(0, 5).map((file) => (
            <li key={file.name} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
              <span className="truncate">{file.name}</span>
              <span className="text-xs text-slate-500">{Math.round(file.size / 1024)} KB</span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-slate-500">Uploads will be wired to Supabase Storage in a later milestone.</p>
    </div>
  );
}
