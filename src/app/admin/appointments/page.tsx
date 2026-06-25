import { Prisma, AppointmentStatus } from "@prisma/client";
import { AutoSubmitSelect } from "@/components/AutoSubmitSelect";
import { prisma } from "@/lib/prisma";
import { CalendarCheck, Clock, Search, Filter } from "lucide-react";
import Link from "next/link";
import StatusSelect from "./StatusSelect";

interface Props {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}

export default async function AppointmentsPage({ searchParams }: Props) {
  const { q, status, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 10;
  const skip = (currentPage - 1) * take;

  // Build the where clause
  const where: Prisma.AppointmentWhereInput = {};

  if (q) {
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { email: { contains: q, mode: "insensitive" } },
      { phone: { contains: q, mode: "insensitive" } },
    ];
  }

  if (status && status !== "ALL") {
    where.status = status as AppointmentStatus;
  }

  // Fetch data
  const [appointments, total, totalAllTime, pendingCount] = await Promise.all([
    prisma.appointment.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
      skip,
    }),
    prisma.appointment.count({ where }),
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: "PENDING" } }),
  ]);

  const totalPages = Math.ceil(total / take);

  // Helper to maintain URL params when paginating
  const buildPageUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    params.set("page", newPage.toString());
    return `/admin/appointments?${params.toString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage patient appointment requests
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card-static p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Appointments</p>
            <p className="text-2xl font-bold text-slate-900">{totalAllTime}</p>
          </div>
        </div>
        <div className="card-static p-5 flex items-center gap-4 border-l-4 border-l-amber-400">
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Action Required (Pending)</p>
            <p className="text-2xl font-bold text-slate-900">{pendingCount}</p>
          </div>
        </div>
      </div>

      {/* Filters and Search Row */}
      <div className="card-static p-2">
        <form method="GET" action="/admin/appointments" className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by name, email, or phone..."
              className="w-full bg-transparent border-0 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0"
            />
          </div>

          {/* Vertical divider */}
          <div className="hidden sm:block w-px bg-slate-200 my-2" />

          {/* Status Filter */}
          <div className="relative flex-1 sm:max-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <AutoSubmitSelect
              name="status"
              defaultValue={status || "ALL"}
              className="w-full bg-transparent border-0 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:ring-0 cursor-pointer appearance-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="PENDING">Pending</option>
              <option value="CONTACTED">Contacted</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </AutoSubmitSelect>
          </div>
          
          <button type="submit" className="hidden">Submit</button>
        </form>
      </div>

      {/* Table */}
      <div className="card-static overflow-hidden">
        {appointments.length === 0 ? (
          <div className="p-16 text-center text-slate-400">
            {q || status ? "No appointments match your filters." : "No appointment requests yet."}
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Patient Details</th>
                    <th>Contact Info</th>
                    <th>Service</th>
                    <th>Date Requested</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => (
                    <tr key={apt.id}>
                      <td>
                        <div>
                          <p className="font-semibold text-slate-900">{apt.name}</p>
                          {apt.message && (
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1 max-w-[200px]" title={apt.message}>
                              &ldquo;{apt.message}&rdquo;
                            </p>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-700">{apt.phone}</p>
                          <p className="text-xs text-slate-500">{apt.email || "No email"}</p>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm text-slate-700 font-medium bg-slate-100 px-2 py-1 rounded">
                          {apt.service || "General"}
                        </span>
                      </td>
                      <td className="text-slate-500 text-sm">
                        {new Date(apt.createdAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                        <span className="block text-xs mt-0.5">
                          {new Date(apt.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                      </td>
                      <td>
                        <StatusSelect id={apt.id} currentStatus={apt.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden flex flex-col divide-y divide-slate-100">
              {appointments.map((apt) => (
                <div key={apt.id} className="p-4 space-y-3 hover:bg-slate-50 transition">
                  <div className="flex justify-between items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900 text-base truncate">{apt.name}</p>
                      <p className="text-sm font-medium text-slate-700 mt-0.5">{apt.phone}</p>
                      {apt.email && (
                        <p className="text-xs text-slate-500 truncate mt-0.5">{apt.email}</p>
                      )}
                    </div>
                    <div className="shrink-0">
                      <StatusSelect id={apt.id} currentStatus={apt.status} />
                    </div>
                  </div>

                  {apt.message && (
                    <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="line-clamp-3 italic">&ldquo;{apt.message}&rdquo;</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                      {apt.service || "General"}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {new Date(apt.createdAt).toLocaleDateString(undefined, {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-sm text-slate-500">
            Showing {skip + 1} to {Math.min(skip + take, total)} of {total} results
          </p>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={buildPageUrl(currentPage - 1)}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={buildPageUrl(currentPage + 1)}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}