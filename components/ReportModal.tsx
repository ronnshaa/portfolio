'use client';

import { useState } from 'react';

export default function ReportModal() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-800">Report this viewpoint</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
        >
          Report
        </button>
      </div>
      {open && (
        <div className="mt-3 space-y-3 rounded-md border border-dashed border-red-200 bg-red-50 p-3">
          <label className="block text-sm font-medium text-slate-800" htmlFor="report-reason">
            Reason
          </label>
          <textarea
            id="report-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder="Tell us why this content should be reviewed"
            className="w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <div className="flex gap-2 text-sm">
            <button
              type="button"
              className="rounded-md bg-brand px-3 py-1.5 font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Submit
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
          <p className="text-xs text-slate-500">Submission will connect to the reporting action later.</p>
        </div>
      )}
    </div>
  );
}
