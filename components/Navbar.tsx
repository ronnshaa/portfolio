import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Map' },
  { href: '/add', label: 'Add' },
  { href: '/profile', label: 'Profile' }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          ViewPoints
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
