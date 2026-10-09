import Link from "next/link";
import {
  ArrowRight,
  Home,
  Search,
  FileText,
  Mail,
  Zap,
  Sparkles,
} from "lucide-react";

const quickActions = [
  {
    title: "Go to Homepage",
    description: "Back to the main page",
    href: "/",
    icon: Home,
  },
  {
    title: "Search",
    description: "Find what you need",
    href: "/search",
    icon: Search,
  },
  {
    title: "Check Our Docs",
    description: "Browse our guides",
    href: "/docs",
    icon: FileText,
  },
  {
    title: "Contact Support",
    description: "We're here to help",
    href: "/support",
    icon: Mail,
  },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#080d1b] px-6 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      {/* Navbar */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between py-7">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Zap className="h-8 w-8 fill-blue-500 text-blue-500" />
          NextApp
        </Link>

        <p className="hidden text-sm text-slate-400 sm:block">
          Better routes. Brighter ideas.
        </p>
      </header>

      {/* Main content */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center py-12 text-center">
        {/* Animated illustration */}
        <div className="relative mb-6 flex h-36 w-36 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative flex h-28 w-28 animate-bounce items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-slate-700 to-slate-950 shadow-2xl shadow-blue-500/20">
            <div className="flex h-16 w-20 items-center justify-center rounded-2xl border border-slate-500 bg-[#080d1b]">
              <div className="flex gap-4">
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
              </div>
            </div>

            <span className="absolute -right-3 -top-4 text-3xl text-blue-400">
              ?
            </span>

            <Sparkles className="absolute -left-5 top-1 h-5 w-5 animate-pulse text-purple-400" />
          </div>
        </div>

        {/* Error message */}
        <h1 className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mt-5 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or might have been deleted.
        </p>

        {/* Primary action */}
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
        >
          <Home className="h-5 w-5" />
          Go Back Home
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Quick actions */}
      <section className="relative z-10 mx-auto w-full max-w-5xl pb-10">
        <div className="mb-8 flex items-center gap-5">
          <div className="h-px flex-1 bg-slate-700" />
          <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400">
            QUICK ACTIONS
          </h3>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20 group-hover:text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="font-semibold text-slate-100">{action.title}</h4>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-sm text-slate-400">{action.description}</p>

                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 pb-2 text-center text-sm text-slate-500">
          Still lost? Try searching or head back to{" "}
          <Link
            href="/"
            className="font-medium text-blue-400 transition hover:text-blue-300"
          >
            the homepage
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
