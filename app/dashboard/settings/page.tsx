  "use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("displayName") ?? "";
    const savedEmail = localStorage.getItem("profileEmail") ?? "";
    setName(savedName);
    setEmail(savedEmail);
  }, []);

  function handleSave() {
    localStorage.setItem("displayName", name);
    localStorage.setItem("profileEmail", email);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-xl text-black dark:text-white">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Update your profile and preferences.
          </p>
        </div>
        <ThemeToggle />
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>

        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
          Display Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-5 rounded-lg
            bg-white dark:bg-zinc-950
            border border-gray-300 dark:border-white/10
            text-black dark:text-white"
        />

        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
          Email
        </label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-5 rounded-lg
            bg-white dark:bg-zinc-950
            border border-gray-300 dark:border-white/10
            text-black dark:text-white"
        />

        <button
          onClick={handleSave}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
        >
          Save Changes
        </button>

        {saved && (
          <p className="text-green-500 text-sm mt-3">
            Saved successfully ✔
          </p>
        )}
      </div>
    </div>
  );
}