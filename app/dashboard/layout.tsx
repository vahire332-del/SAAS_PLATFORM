"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="flex min-h-screen w-full">
        <Sidebar />

        <div className="flex-1 w-full">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-black/70 backdrop-blur px-6 py-4">
            <div className="text-sm text-zinc-400 truncate">
              {pathname}
            </div>
          </header>

          <main className="w-full p-6 md:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}