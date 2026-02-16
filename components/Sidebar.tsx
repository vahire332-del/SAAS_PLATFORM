"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={
        "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition " +
        (active
          ? "bg-zinc-800 text-white"
          : "text-zinc-300 hover:bg-zinc-900 hover:text-white")
      }
    >
      <span>{label}</span>
      {active ? (
        <span className="text-xs text-zinc-400">•</span>
      ) : null}
    </Link>
  );
}

export default function Sidebar() {
  const router = useRouter();

  function logout() {
    try {
      localStorage.removeItem("currentUser");
    } finally {
      router.push("/login");
    }
  }

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:gap-6 md:border-r md:border-white/10 md:bg-black md:p-6">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold tracking-tight">Dashboard</div>
      </div>

      <nav className="flex flex-col gap-1">
        <NavItem href="/dashboard" label="Overview" />
        <NavItem href="/dashboard/user" label="Users" />
        <NavItem href="/dashboard/settings" label="Settings" />
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <button
          type="button"
          onClick={logout}
          className="w-full rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-left text-sm text-red-500 hover:bg-red-500/20 transition"
        >
          Logout
        </button>
        <p className="text-xs text-zinc-500 leading-relaxed">
          You are signed in using local storage.
        </p>
      </div>
    </aside>
  );
}
