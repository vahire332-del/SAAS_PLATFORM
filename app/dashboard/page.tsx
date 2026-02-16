"use client";

import { useEffect, useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  website?: string;
  company: { name: string };
};

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6 rounded-xl">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-semibold mt-2 text-black dark:text-white">
        {value}
      </p>
    </div>
  );
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error(`Request failed (${res.status})`);
        }
        const data = (await res.json()) as User[];
        setUsers(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const derived = useMemo(() => {
    const totalUsers = users.length;
    const companies = new Set(users.map((u) => u.company?.name).filter(Boolean));
    const emailDomains = new Set(
      users
        .map((u) => u.email?.split("@")[1])
        .filter(Boolean),
    );
    const websites = new Set(users.map((u) => u.website).filter(Boolean));

    return {
      totalUsers,
      companies: companies.size,
      emailDomains: emailDomains.size,
      websites: websites.size,
    };
  }, [users]);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold mb-2">Dashboard Overview</h1>
      <p className="text-sm text-zinc-400 mb-8">
        Summary derived from the users dataset.
      </p>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl animate-pulse"
            >
              <div className="h-3 w-24 bg-white/10 rounded" />
              <div className="mt-3 h-7 w-20 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <div className="font-semibold">Could not load dashboard data</div>
          <div className="text-sm text-red-200 mt-1">{error}</div>
          <button
            type="button"
            onClick={() => location.reload()}
            className="mt-4 rounded-lg bg-red-500/20 hover:bg-red-500/30 px-3 py-2 text-sm transition"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard label="Total Users" value={String(derived.totalUsers)} />
          <MetricCard label="Companies" value={String(derived.companies)} />
          <MetricCard label="Email Domains" value={String(derived.emailDomains)} />
          <MetricCard label="Websites" value={String(derived.websites)} />
        </div>
      )}
    </div>
  );
}