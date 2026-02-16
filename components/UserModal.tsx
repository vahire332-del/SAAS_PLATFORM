"use client";

import { useEffect } from "react";

type User = {
  id: number;
  username?: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  };
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
};

export default function UserModal({
  user,
  onClose,
}: {
  user: User | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (user) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [user, onClose]);

  if (!user) return null;

  const addressLine = [
    user.address?.suite,
    user.address?.street,
    user.address?.city,
    user.address?.zipcode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative z-10 w-[92vw] max-w-lg rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-zinc-400 mt-1">{user.email}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm hover:bg-zinc-800 transition"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
              <div className="text-xs text-zinc-400">Username</div>
              <div className="mt-1 text-sm">{user.username ?? "—"}</div>
            </div>

            <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
              <div className="text-xs text-zinc-400">Phone</div>
              <div className="mt-1 text-sm">{user.phone ?? "—"}</div>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
            <div className="text-xs text-zinc-400">Website</div>
            <div className="mt-1 text-sm break-all">
              {user.website ? (
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
                >
                  {user.website}
                </a>
              ) : (
                "—"
              )}
            </div>
          </div>

          <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
            <div className="text-xs text-zinc-400">Address</div>
            <div className="mt-1 text-sm">{addressLine || "—"}</div>
          </div>

          <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
            <div className="text-xs text-zinc-400">Company</div>
            <div className="mt-1 text-sm">
              {user.company?.name ?? "—"}
            </div>
          </div>

          <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
            <div className="text-xs text-zinc-400">Company Catch Phrase</div>
            <div className="mt-1 text-sm">
              {user.company?.catchPhrase ?? "—"}
            </div>
          </div>

          <div className="rounded-xl bg-zinc-900/60 p-4 border border-white/5">
            <div className="text-xs text-zinc-400">User ID</div>
            <div className="mt-1 text-sm">{user.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
