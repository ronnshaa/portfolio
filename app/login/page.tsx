export default function LoginPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">Account</p>
        <h1 className="text-3xl font-semibold text-slate-900">Sign in or create an account</h1>
        <p className="max-w-2xl text-slate-600">Supabase Auth wiring will be added in the next milestone.</p>
      </div>
      <div className="grid gap-4 rounded-lg border border-dashed border-slate-300 bg-white p-6">
        <div className="rounded-md border border-slate-200 p-4">
          <p className="font-medium text-slate-800">Sign in form placeholder</p>
        </div>
        <div className="rounded-md border border-slate-200 p-4">
          <p className="font-medium text-slate-800">Sign up form placeholder</p>
        </div>
      </div>
    </div>
  );
}
