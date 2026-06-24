"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface StatusSelectProps {
  id: string;
  currentStatus: string;
}

export default function StatusSelect({ id, currentStatus }: StatusSelectProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setLoading(true);

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        toast.success("Lead status updated");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to update lead");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative inline-block w-28">
      <select
        value={currentStatus}
        onChange={handleChange}
        disabled={loading}
        className={`w-full appearance-none rounded-full px-3 py-1 text-xs font-semibold border focus:outline-hidden focus:ring-2 focus:ring-offset-1 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
          currentStatus === "NEW"
            ? "bg-blue-50 text-blue-700 border-blue-200 focus:ring-blue-500"
            : currentStatus === "REPLIED"
            ? "bg-green-50 text-green-700 border-green-200 focus:ring-green-500"
            : "bg-slate-100 text-slate-700 border-slate-300 focus:ring-slate-500"
        }`}
      >
        <option value="NEW">New</option>
        <option value="REPLIED">Replied</option>
        <option value="ARCHIVED">Archived</option>
      </select>
      
      {loading && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Loader2 className="w-3 h-3 animate-spin text-slate-500" />
        </div>
      )}
    </div>
  );
}
