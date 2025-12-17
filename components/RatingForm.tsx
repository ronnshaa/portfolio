'use client';

import { useState } from 'react';

export type RatingFormProps = {
  initialRating?: number;
};

export default function RatingForm({ initialRating = 0 }: RatingFormProps) {
  const [value, setValue] = useState(initialRating);
  const [review, setReview] = useState('');

  return (
    <form className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-slate-800">Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-16 rounded-md border border-slate-300 px-2 py-1"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-800">Review (optional)</label>
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="Share your experience"
        />
      </div>
      <p className="text-xs text-slate-500">Submit logic will be wired to Supabase in a later milestone.</p>
      <button
        type="button"
        className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
      >
        Save rating
      </button>
    </form>
  );
}
