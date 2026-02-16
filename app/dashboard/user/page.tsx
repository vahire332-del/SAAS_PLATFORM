"use client";

import { useEffect, useState } from "react";
import UserModal from "@/components/UserModal";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const USERS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  // ✅ FETCH API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // ✅ SEARCH
  useEffect(() => {
    let result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    );

    // ✅ SORT
    result.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );

    setFiltered(result);
    setPage(1);
  }, [search, sortAsc, users]);

  // ✅ PAGINATION
  const start = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filtered.slice(start, start + USERS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / USERS_PER_PAGE);

  if (loading) return <p className="text-white">Loading users...</p>;

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>

      {/* SEARCH */}
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search name or email..."
          className="px-4 py-2 rounded bg-zinc-900 border border-white/10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-zinc-800 rounded"
        >
          Sort {sortAsc ? "A–Z" : "Z–A"}
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {paginatedUsers.map((u) => (
          <div
            key={u.id}
            onClick={() => setSelectedUser(u)}
            className="p-4 bg-zinc-900 rounded cursor-pointer hover:bg-zinc-800"
          >
            <div className="font-semibold">{u.name}</div>
            <div className="text-sm text-gray-400">{u.email}</div>
            <div className="text-xs text-gray-500">{u.company.name}</div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-purple-600" : "bg-zinc-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
}
