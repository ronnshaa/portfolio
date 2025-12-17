import MapPicker from '@/components/MapPicker';
import PhotoUploader from '@/components/PhotoUploader';

export default function AddViewpointPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">Create</p>
        <h1 className="text-3xl font-semibold text-slate-900">Add a new viewpoint</h1>
        <p className="max-w-2xl text-slate-600">
          Authentication and server-side validation will be wired in next milestones. For now, this page is a
          scaffold for the upcoming form, map picker, and photo uploads.
        </p>
      </div>
      <div className="grid gap-4 rounded-lg border border-dashed border-slate-300 bg-white p-6">
        <div className="rounded-md border border-slate-200 p-4">
          <p className="font-medium text-slate-800">Form placeholder</p>
          <p className="text-sm text-slate-600">Fields for title, description, coordinates, and validation will live here.</p>
        </div>
        <MapPicker />
        <PhotoUploader />
      </div>
    </div>
  );
}
