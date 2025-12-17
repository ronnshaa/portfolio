import Link from 'next/link';
import { notFound } from 'next/navigation';

type ViewpointPageProps = {
  params: { id: string };
};

export default function ViewpointPage({ params }: ViewpointPageProps) {
  if (!params?.id) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">Viewpoint</p>
      <h1 className="text-3xl font-semibold text-slate-900">{params.id}</h1>
      <p className="max-w-3xl text-slate-600">
        Detailed content for a single viewpoint will render here: description, gallery, ratings, and reporting.
      </p>
      <div className="flex gap-4 text-sm">
        <Link className="text-brand" href="/">Back to map</Link>
        <Link className="text-brand" href="/add">
          Add a viewpoint
        </Link>
      </div>
    </div>
  );
}
