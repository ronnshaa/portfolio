import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">ViewPoints</p>
        <h1 className="text-3xl font-semibold text-slate-900">Discover viewpoints on the map</h1>
        <p className="max-w-2xl text-slate-600">
          This page will host the interactive Mapbox map that lets visitors browse viewpoints. As you move
          the map, we&apos;ll fetch pins within the visible bounds.
        </p>
      </header>
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-slate-500">
        Map placeholder. Provide <code className="rounded bg-slate-100 px-2 py-1 font-mono text-xs">MAPBOX_TOKEN</code>
        to render the map in a future step.
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
        <Link className="font-semibold text-brand" href="/add">
          Add a viewpoint
        </Link>
        <Link className="font-semibold text-brand" href="/viewpoint/demo-viewpoint">
          Example viewpoint
        </Link>
      </div>
    </div>
  );
}
