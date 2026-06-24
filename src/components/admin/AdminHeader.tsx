"use client";

import { useRouter } from "next/navigation";
import { Menu, LogOut } from "lucide-react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    document.cookie =
      "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  }

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>

        <div>
          <p className="text-xs text-slate-400 font-medium">Welcome back</p>
          <p className="text-sm font-semibold text-slate-700">Admin</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </header>
  );
}