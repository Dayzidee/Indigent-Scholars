import Link from 'next/link';

export function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/80 shadow-sm dark:shadow-none border-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/">
          <div className="text-xl font-bold tracking-tighter text-primary dark:text-blue-200">
            Indigent-Sc
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link
            className="font-manrope tracking-tight text-sm font-semibold text-primary border-b-2 border-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-semibold text-neutral-600 hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-semibold text-neutral-600 hover:text-primary transition-colors"
            href="/students"
          >
            Verified Students
          </Link>
          <Link
            className="font-manrope tracking-tight text-sm font-semibold text-neutral-600 hover:text-primary transition-colors"
            href="/sponsors"
          >
            For Sponsors
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="font-manrope tracking-tight text-sm font-semibold text-neutral-600 scale-95 duration-150 active:opacity-80">
              Log In
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-manrope tracking-tight text-sm font-semibold scale-95 duration-150 active:opacity-80 shadow-md">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
