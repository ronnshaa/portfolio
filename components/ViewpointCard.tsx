import Link from 'next/link';

export type ViewpointCardProps = {
  id: string;
  title: string;
  description?: string;
  rating?: number;
};

export default function ViewpointCard({ id, title, description, rating }: ViewpointCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
        {rating ? (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">{rating.toFixed(1)}</span>
        ) : (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">No rating</span>
        )}
      </div>
      <div className="mt-3 text-sm">
        <Link className="text-brand" href={`/viewpoint/${id}`}>
          Open details
        </Link>
      </div>
    </article>
  );
}
